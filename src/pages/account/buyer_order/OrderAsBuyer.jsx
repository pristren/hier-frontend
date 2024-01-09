import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderAsBuyer() {
  const { user } = useSelector((state) => state.auth);
  const [getOrders, setGetOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/orders/buyer/${user._id}`)
      .then((res) => {
        setGetOrders(res.data);
      });
  }, [user._id]);

  console.log(getOrders);
  console.log(user?.email);

  return (
    <main className="p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-xl  lg:text-2xl font-bold mb-4">
        Running Orders ({getOrders?.length})
      </h1>
      <div className="grid gap-4 md:gap-6 lg:gap-8">
        {getOrders?.length
          ? getOrders?.map((order, i) => {
              return (
                <Card key={i} className="">
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
                          {order?.offer?.taskId?.what}
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-center">Price</div>
                      <div className="text-base font-medium text-center text-secondary">
                        {order?.offer?.offer_amount}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-center text-sm">Status</div>
                      <Badge
                        variant={"outline"}
                        className={"bg-green-50 text-green-600"}
                      >
                        {order?.status}
                      </Badge>
                    </div>
                    <div className="">
                      <Button className=" px-4 py-2 text-blue-600 bg-blue-50 rounded hover:text-blue-700 hover:bg-blue-100">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          : null}
      </div>
    </main>
  );
}
