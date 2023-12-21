import Navbar from "@/components/navbar/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { MoreVertical } from "lucide-react";

export default function Messages() {
  return (
    <div className="">
      <Navbar />{" "}
      <div className="container flex h-[88vh] lg:h-[86vh] mt-4 rounded-2xl border ps-0 ">
        <div className="flex flex-col w-[25%]  border-r ">
          <div className="m-6">
            <div className="flex border items-center bg-white rounded-md  px-2">
              <SearchIcon className="text-gray-500 w-5 h-5" />
              <Input className="border-0" placeholder="Search" />
            </div>
          </div>
          <div className="overflow-y-auto ">
            <div className="flex items-center px-5 py-3 ">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-600">
                  Hey, how&apos;s it going?
                </p>
              </div>
              <span className="ml-auto text-xs text-gray-500">10:30 AM</span>
            </div>
            <div className="flex items-center px-5 py-3 bg-[#F5F5F5] ">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-semibold">Jane Smith</p>
                <p className="text-xs text-gray-600">
                  Just finished a meeting. Anythi...
                </p>
              </div>
              <span className="ml-auto text-xs text-gray-500">11:15 AM</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[75%]">
          <div className="flex items-center justify-between p-5 pe-0 border-b border-gray-300">
            <div className="flex items-center">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-semibold">Jane Smith</p>
                <p className="text-xs text-gray-500">
                  Last seen today at 11:15 AM
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline">View Profile</Button>
              <MoreVertical className="text-gray-500 w-5 h-5" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto py-4 space-y-4 gap-4">
            <div className="flex px-4 items-end justify-start">
              <div className="max-w-xs bg-gray-100 rounded-lg p-4">
                <p className="text-sm">Hi, how&apos;s your day shaping up?</p>
                <span className="ml-2 float-right text-xs text-gray-500 mt-2">
                  8:30 AM
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end ">
              <div className="max-w-xs bg-secondary text-white rounded-lg p-4">
                <p className="text-sm">
                  It&apos;s been quite hectic, deadlines looming. Just finished
                  a long meeting.
                </p>
                <span className=" float-right mt-2 text-xs text-gray-100">
                  8:35 AM
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4">
            <SmileIcon className="text-gray-500 w-5 h-5" />
            <input
              className="flex-1 mx-4 border-none bg-gray-100 rounded-md py-2 px-4 placeholder-gray-500 focus:ring-0"
              placeholder="Type a message"
            />
            <Button variant="outline" className="bg-secondary text-white">
              Send <SendIcon className="w-5 h-5 text-white " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
function FileIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SmileIcon(props) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function VideoIcon(props) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
