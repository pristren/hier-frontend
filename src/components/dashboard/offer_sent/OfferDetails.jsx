import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function OfferDetails({ open, setOpen, modalData }) {
  console.log(modalData);
  return (
    <div className="h-min overflow-y-auto ">
      {/* <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent> */}
      {/* <header className="flex w-full h-6  px-4 md:px-6 bg-blue-500 text-white">
        <Link to="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Service Portal</span>
        </Link>
      </header> */}
      <DialogHeader className={" px-4 md:px-6"}>
        <DialogTitle className="text-xl font-bold tracking-tighter sm:text-2xl">
          Service Proposal
        </DialogTitle>
        <DialogDescription className=" text-gray-500 md:text-md/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
          Detailed information about the proposal
        </DialogDescription>
      </DialogHeader>
      <main className="w-full py-12 ">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Tesk Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Address: 123 Street, City, Country
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Budget: ${modalData?.budget}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Date: {modalData?.when}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Additional Details: {modalData?.details}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Applicant&lsquo;s Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Name: {modalData?.userId?.first_name}{" "}
                {modalData?.userId?.last_name}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Description: {modalData?.offers?.body || "missing"}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Offer amount: {modalData?.offers?.offer_amount || "missing"}
              </p>
            </div>
          </div>
          <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Cover Letter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {modalData?.cover_later || "No cover later"}
              </p>
            </div>
            {/* <div className="space-y-4">
              <h3 className="text-lg font-bold">Files</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">Resume.pdf</Link>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">Portfolio.pdf</Link>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Link href="#">References.pdf</Link>
              </p>
            </div> */}
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
            <Button
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-green-400  "
              onClick={() => {
                setOpen(!open);
              }}
            >
              Accept Proposal
            </Button>
            <Button
              className="text-gray-800 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Decline Proposal
            </Button>
          </div>
          {/* <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                // setOpen(!open);
              }}
            >
              Save changes
            </Button>
          </DialogFooter> */}
        </div>
      </main>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
