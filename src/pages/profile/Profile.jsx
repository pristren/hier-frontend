import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { PencilIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex justify-center w-full mb-2">
          {/* <Avatar className="cursor-pointer rounded-none">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar> */}
          <img
            alt="Profile"
            className="rounded-full"
            height="100"
            src="https://github.com/shadcn.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          {/* <SettingsIcon className="text-gray-400 w-6 h-6" /> */}
        </div>
        <h1 className="text-2xl font-semibold">
          {user?.first_name} {user?.last_name}
        </h1>
        <p className="text-gray-500">Sydney NSW, Australia</p>
        <p className="text-gray-500">
          Member since {format(user?.createdAt, "PPP")}{" "}
        </p>
        {/* <p className="text-gray-500">Last online 1 minute ago</p> */}

        <div className="flex mt-6 w-full gap-4">
          <Card className="w-[30%] pt-4 h-fit">
            <CardContent>
              <h2 className="text-lg font-semibold">Badges</h2>
              <p className="mt-4 text-gray-600 text-sm">Featured</p>
              <Button
                variant="outline"
                className="bg-blue-100 text-blue-700 mt-2 rounded-full"
              >
                Get a Badge
              </Button>
              <p className="mt-4 text-gray-600 text-sm">Issued</p>
              <Button
                variant="outline"
                className="bg-blue-100 text-blue-700 mt-2 rounded-full"
              >
                Get a Badge
              </Button>
            </CardContent>
          </Card>
          {/* <div className="w-[70%]">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-2 text-blue-600 cursor-pointer">
              Edit your description now.
            </p>
          </div> */}
          <div className="w-[70%]">
            <Card className="">
              <CardContent>
                <div className="mt-4 mb-12">
                  <h3 className="font-semibold">About</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p>Edit about details...</p>
                    <div className="p-3 bg-gray-300 rounded-full text-black ">
                      <PencilIcon className="h-4 w-4 " />
                    </div>
                  </div>
                </div>
                <div className="mt-8 mb-16">
                  <div className="flex items-center justify-between mt-2 ">
                    <h3 className="font-semibold">Portfolio</h3>
                    <div className="p-3 bg-gray-300 rounded-full text-black ">
                      <PencilIcon className="h-4 w-4 " />
                    </div>
                  </div>
                  <Avatar className="cursor-pointer rounded-lg h-20 w-20 mt-4 mb-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </div>
                {/* <div className="mt-4">
                <h3 className="font-semibold">Listings</h3>
                <div className="flex items-center justify-between mt-2">
                  <p>Work less, earn more</p>
                  <PencilIcon className="h-6 w-6" />
                </div>
                <Button className="mt-2">Create a listing</Button>
              </div> */}
                <div className="mt-4 ">
                  <h3 className="font-semibold mb-2">Skills</h3>
                  <Input placeholder="Add new skills here " className="mt-2" />
                  <h3 className="font-semibold mt-6">Education</h3>
                  <Input placeholder="Add new skills here " className="mt-2" />
                  <h3 className="font-semibold mt-6">Specialities</h3>
                  <Input placeholder="Add new skills here " className="mt-2" />
                  <h3 className="font-semibold mt-6">Languages</h3>
                  <Input placeholder="Add new skills here " className="mt-2" />
                  <h3 className="font-semibold mt-6">Work</h3>
                  <Input placeholder="Add new skills here" className="mt-2" />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Transportation</h3>
                  <div className="flex gap-2 pt-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Bicycle
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Car
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Online
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Scooter
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Truck
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Walk
                    </label>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button className="mr-2" variant="outline">
                    Cancel
                  </Button>
                  <Button variant="secondary" className="text-white">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="my-12">
          <div className="flex mt-6 justify-center ">
            <Button className="mr-2 text-white" variant="secondary">
              As a tasker
            </Button>
            <Button variant="outline">As a poster</Button>
          </div>
          <p className="mt-4 text-center text-gray-500">
            {user?.first_name} hasn&apos;t received any reviews just yet.
          </p>
        </div>
      </div>
    </div>
  );
}
