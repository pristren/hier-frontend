import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Tasker Dashboard</h1>
          <Badge className="flex items-center space-x-1" variant="">
            <MedalIcon className="h-6 w-6 text-yellow-400" />
            <span>Bronze</span>
            <span className="text-sm">20% service fee excl. GST</span>
          </Badge>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white p-6 shadow-sm">
            <CardHeader>
              <CardTitle>Your Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">
                Your Completion Rating (last 20 tasks)
              </h3>
              <p className="text-sm mb-4">
                We&apos;ve set your Completion Rating as Good to help kickstart
                your Airtasker journey. Complete your assigned tasks to keep
                this score high!
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{
                    width: "50%",
                  }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span>Poor</span>
                <span>Okay</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white p-6 shadow-sm">
            <CardHeader>
              <CardTitle>Your Earnings (last 30 days)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Your earnings are $880 away from Silver and lowering service
                fees.
              </p>
              <div className="flex justify-between text-xs">
                <span>$0</span>
                <span>$880</span>
                <span>$2,650</span>
                <span>$5,300+</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      <main className="p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <h1 className="text-xl  lg:text-2xl font-bold mb-4">
          Running Orders (3)
        </h1>
        <div className="grid gap-4 md:gap-6 lg:gap-8">
          <Card className="">
            <CardContent className="flex justify-between items-center gap-4 p-6">
              <div className="flex space-y-1 items-center gap-2">
                <Avatar className="cursor-pointer rounded-none">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div className="flex items-center gap-2">
                  <Link className="text-base font-medium " to="#">
                    Title of the task
                  </Link>
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center">Price</div>
                <div className="text-base font-medium text-center text-secondary">
                  $100
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center text-sm">Status</div>
                <Badge
                  variant={"outline"}
                  className={"bg-green-50 text-green-600"}
                >
                  in progess
                </Badge>
              </div>
              <div className="">
                <Button className=" px-4 py-2 text-blue-600 bg-blue-50 rounded hover:text-blue-700 hover:bg-blue-100">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent className="flex justify-between items-center gap-4 p-6">
              <div className="flex space-y-1 items-center gap-2">
                <Avatar className="cursor-pointer rounded-none">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div className="flex items-center gap-2">
                  <Link className="text-base font-medium " to="#">
                    Title of the task
                  </Link>
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center">Price</div>
                <div className="text-base font-medium text-center text-secondary">
                  $100
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center text-sm">Status</div>
                <Badge
                  variant={"outline"}
                  className={"bg-green-50 text-green-600"}
                >
                  in progess
                </Badge>
              </div>
              <div className="">
                <Button className=" px-4 py-2 text-blue-600 bg-blue-50 rounded hover:text-blue-700 hover:bg-blue-100">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent className="flex justify-between items-center gap-4 p-6">
              <div className="flex space-y-1 items-center gap-2">
                <Avatar className="cursor-pointer rounded-none">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div className="flex items-center gap-2">
                  <Link className="text-base font-medium " to="#">
                    Title of the task
                  </Link>
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center">Price</div>
                <div className="text-base font-medium text-center text-secondary">
                  $100
                </div>
              </div>
              <div className="space-y-1">
                <div className=" text-center text-sm">Status</div>
                <Badge
                  variant={"outline"}
                  className={"bg-green-50 text-green-600"}
                >
                  in progess
                </Badge>
              </div>
              <div className="">
                <Button className=" px-4 py-2 text-blue-600 bg-blue-50 rounded hover:text-blue-700 hover:bg-blue-100">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
function MedalIcon(props) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}
