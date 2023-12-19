import FilterSection from "@/components/tasks/FilterSection";
import TaskSection from "@/components/tasks/TaskSection";
import { taskData } from "@/helpers/tasks_data/TaskData";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BrowseTasks() {
  const [filter, setFilter] = useState({
    taskTitle: "",
    category: [],
    toBeDone: "all",
    distance: 1,
    taskPrice: 250,
    priceSorting: "highToLow",
    taskCategory: "available",
    location: "",
  });

  const handleSearchSubmit = (searchValue) => {
    searchValue.preventDeafult();
  };

  const [originalData, setOriginalData] = useState(taskData);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/tasks").then((res) => {
      setOriginalData(res?.data?.tasks);
    });
  }, []);
  return (
    <div>
      <div className="max-w-full">
        <div className="container mx-auto px-7 md:px-12 lg:px-20">
          <div className="md:grid grid-cols-12 gap-9 w-full">
            <div className="col-span-12 md:col-span-5 lg:col-span-4 py-10 max-w-full hidden sm:block">
              <FilterSection filter={filter} setFilter={setFilter} />
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-8 py-10 max-w-full">
              <TaskSection
                originalData={originalData}
                filter={filter}
                setFilter={setFilter}
                handleSearchSubmit={handleSearchSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
