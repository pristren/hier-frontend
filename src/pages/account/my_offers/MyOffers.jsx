import React, { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import OfferDetails from "@/components/dashboard/offer_sent/OfferDetails";
import { useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";

// const data = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     user: "Jordan Kennedy",
//     email: "ken99@yahoo.com",
//     task: "Title of the task..",
//     date: "12/12/2023",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     user: "Jackson Graham",
//     email: "Abe45@gmail.com",
//     task: "Title of the task 2..",
//     date: "12/08/2023",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     user: "Lauren Trujillo",
//     email: "Monserrat44@gmail.com",
//     task: "Title of the task..",
//     date: "02/10/2023",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     user: "Curtis Weaver",
//     email: "Silas22@gmail.com",
//     task: "Title of the task..",
//     date: "02/10/2023",
//   },
// ];

function MyOffers() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([
    {
      body: "",
      createdAt: "",
      offer_amount: "",
      offer_createdat: "",
      taskId: {
        _id: "",
        userId: "",
        what: "",
        when: "",
        who: "",
      },
      title: "",
      updatedAt: "",
      userId: {
        _id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      _id: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/offers/poster/${user._id}`)
      .then((res) => {
        setData(res.data);
      });
  }, [user?._id]);
  // console.log(data);

  const [modalData, setModalData] = useState({});
  // console.log(modalData);

  const columns = [
    {
      accessorKey: "taskId.what",
      header: "Task",
      cell: ({ row }) => {
        return (
          <div className="capitalize flex items-center gap-4">
            <Avatar className="cursor-pointer rounded-none">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            {row?.original?.taskId?.what}
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Sent At",
      cell: ({ row }) => (
        <div className="capitalize flex items-center gap-4">
          {row?.getValue("createdAt")
            ? format(row?.getValue("createdAt"), "PPP")
            : " "}
        </div>
      ),
    },
    {
      // accessorKey: "user",
      header: "Offer Sent By",
      cell: ({ row }) => {
        return (
          <div className="capitalize flex items-center gap-4">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            {row?.original?.userId?.first_name}{" "}
            {row?.original?.userId?.last_name}
          </div>
        );
      },
    },
    // {
    //   accessorKey: "email",
    //   header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Email
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => (
    //     <div className="lowercase">{row.getValue("email")}</div>
    //   ),
    // },
    {
      accessorKey: "offer_amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("offer_amount"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="">
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onClick={() => {
                      setOpen(!open);
                      setModalData(row?.original);
                      // navigator.clipboard.writeText(payment.id);
                    }}
                    className="cursor-pointer"
                  >
                    View Details
                  </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuItem>
                  <p className="cursor-pointer text-destructive">Reject</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent
              className="max-h-[98vh] overflow-y-auto border md:max-w-2xl"
              xtra=" opacity-30"
            >
              {open && (
                <OfferDetails
                  modalData={modalData}
                  open={open}
                  setOpen={setOpen}
                />
              )}
            </DialogContent>
          </Dialog>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  // console.log(table.getAllColumns());

  return (
    <div className="max-w-5xl">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter tasks..."
          value={table.getColumn("what")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("what")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Total Offers {table.getFilteredRowModel().rows.length}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
