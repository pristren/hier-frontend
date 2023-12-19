import Comments from "@/components/tasks/task_details/Comments";
import Details from "@/components/tasks/task_details/Details";
import React from "react";
import { useParams } from "react-router-dom";

export default function SingleTask() {
  const params = useParams();
  return (
    <div>
      <div className="container mx-auto px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7 py-10">
            <Details id={params.id} />
          </div>
          <div className="col-span-12 md:col-span-5 py-10">
            <Comments id={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
