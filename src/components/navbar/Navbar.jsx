import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-sm bg-[#213F61]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <Link
            to="/"
            className="  text-orange-400 text-4xl font-semibold uppercase self-stretch"
          >
            Hier
          </Link>
          <ul className="hidden lg:flex text-white items-center">
            <li className="flex items-center">
              <Link to="/categories" className="  pl-4 py-2 rounded-lg">
                Find talent
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_462_330"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_462_330)">
                    <path d="M12 15L7 10H17L12 15Z" fill="white" />
                  </g>
                </svg>
              </span>
            </li>
            <li>
              <Link to="/browse-tasks" className=" px-4 py-2 rounded-lg">
                Find Tasks
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className=" px-4 py-2 rounded-lg">
                How it works
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <div className="items-start self-stretch flex gap-2.5 max-md:justify-center">
            <Link
              to="/signin"
              className="text-white text-base font-medium self-center my-auto"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="text-orange-400 text-base font-medium self-stretch whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-10 w-[170px] max-w-full px-5 py-2.5 rounded-[500px]"
            >
              Become a tasker
            </Link>
            <Link to={"/create-task"}>
              <button className="text-white text-base font-bold self-stretch whitespace-nowrap justify-center items-center bg-orange-400 w-[170px] max-w-full pl-11 pr-10 py-2.5 rounded-[50px] max-md:px-5">
                Post a task
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-gray-900 ">☰</button>
        </div>
      </div>
    </nav>
  );
}
