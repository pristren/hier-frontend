import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { format } from "date-fns";
import { Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MyTasks() {
  // const data = [
  //   {
  //     title: "Need a logo Designer",
  //     price: 300,
  //     category: "Design",
  //     details:
  //       "Design a logo for my new startup. Looking for a minimal and modern design.",
  //     date: "20/12/2023",
  //     location: "Remote",
  //   },
  //   {
  //     title: "Help me moving my sofa",
  //     price: 200,
  //     category: "House Help",
  //     details:
  //       "Design a logo for my new startup. Looking for a minimal and modern design.",
  //     date: "20/12/2023",
  //     location: "Remote",
  //   },
  //   {
  //     title: "Plamber needs to fix.",
  //     price: 500,
  //     category: "Design",
  //     details:
  //       "Design a logo for my new startup. Looking for a minimal and modern design.",
  //     date: "20/12/2023",
  //     location: "Swizerland",
  //   },
  //   {
  //     title: "Help me moving my sofa",
  //     price: 200,
  //     category: "House Help",
  //     details:
  //       "Design a logo for my new startup. Looking for a minimal and modern design.",
  //     date: "20/12/2023",
  //     location: "Remote",
  //   },
  // ];
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  useEffect(() => {
    const getTaks = async () => {
      const data = await axios.get(
        `http://localhost:5000/api/v1/tasks/user/${user?._id}`
      );
      const res = await data.data;
      setData(res);
    };
    getTaks();
  }, [user?._id]);

  // console.log(data);

  const [search, setSearch] = useState("");
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/tasks/${id}`)
      .then((res) => {
        axios
          .get(`http://localhost:5000/api/v1/tasks/user/${user?._id}`)
          .then((res) => {
            setData(res.data);
          });
      })
      .catch(() => {
        console.error("Error from delete of a task");
      });
  };
  return (
    <div className="grid min-h-min w-full border">
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search tasks..."
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">My Tasks</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data
              ?.filter((item) => {
                return item?.what
                  ?.toLowerCase()
                  ?.includes(search?.toLowerCase());
              })
              .map((task, i) => {
                return (
                  <Card key={i}>
                    <CardContent className="px-0">
                      <div className="flex  justify-between gap-2 items-center p-4 ">
                        <h2 className="text-xl font-bold  text-gray-800">
                          {task?.what || ""}
                        </h2>
                        <h2 className="text-xl font-bold  text-white p-1 rounded bg-secondary">
                          ${task?.budget || ""}
                        </h2>
                      </div>
                      <Separator className="bg-gray-200" />
                      <div className="p-4 pb-0 pt-2 ">
                        <div className="flex items-center mt-2 text-secondary font-semibold">
                          {task?.category && (
                            <TagIcon className="h-4 w-4 mr-2" />
                          )}
                          <span>{task?.category || ""}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          {task?.details?.length > 50
                            ? task?.details?.substring(0, 50) + "..." // Truncate details if longer than 50 characters
                            : task?.details || ""}
                        </p>

                        <div className="flex flex-wrap justify-between">
                          <div className="flex items-center mt-2">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            <span>{format(task?.date, "PPP") || ""}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <MapPinIcon className="h-4 w-4 mr-2" />
                            <span>{task?.where || ""}</span>
                          </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center gap-4 ">
                          <Button
                            className="w-full text-white"
                            variant="secondary"
                            size="sm"
                          >
                            View Details
                          </Button>
                          <div className="flex gap-2">
                            <Pencil className="w-9 h-9 text-secondary border border-gray-300  cursor-pointer  hover:bg-gray-50  p-2 rounded " />
                            <Trash
                              className="w-9 h-9 text-destructive border border-gray-300  cursor-pointer  hover:bg-gray-50  p-2 rounded "
                              onClick={() => handleDelete(task?._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}
function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
