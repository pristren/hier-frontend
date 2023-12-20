import Comments from "@/components/tasks/task_details/Comments";
import Details from "@/components/tasks/task_details/Details";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleTask() {
  const params = useParams();
  const { id } = params;
  const [taskDetails, setTaskDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/tasks/${id}`).then((res) => {
      setTaskDetails(res?.data);
    });
  }, [id]);
  return (
    <div>
      <div className="container mx-auto px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7 py-10">
            <Details taskDetails={taskDetails} />
          </div>
          <div className="col-span-12 md:col-span-5 py-10">
            <Comments taskDetails={taskDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
