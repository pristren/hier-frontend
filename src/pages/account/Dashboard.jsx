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
