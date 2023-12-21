import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserNav } from "./User_Nav";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn, userLoggedOut } from "@/features/auth/authSlice";
import { BadgePlus, PenSquare } from "lucide-react";

export default function Navbar() {
  const { accessToken } = useSelector((state) => state.auth);
  // console.log(accessToken);
  const dispatch = useDispatch();
  const getLoggedinUser = () => {
    const user = sessionStorage.getItem("authUser");
    if (!user) {
      return null;
    } else {
      return JSON.parse(user);
    }
  };
  useEffect(() => {
    const user = sessionStorage.getItem("authUser");
    if (user) {
      const userData = JSON.parse(user);
      dispatch(
        userLoggedIn({
          accessToken: userData.accessToken,
          user: userData.user,
        })
      );
    }
  }, [dispatch]);

  return (
    <nav className="p-4 shadow-sm bg-[#213F61]">
      <div className="container mx-auto flex justify-between items-center px-4">
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
        <div className="hidden lg:flex ">
          <div className="items-center  flex gap-4 max-md:justify-center">
            {!accessToken && (
              <Link
                to="/signin"
                className="text-white text-base font-medium self-center my-auto"
              >
                Sign in
              </Link>
            )}
            {!accessToken && (
              <Link
                to="/signup"
                className="text-orange-400 text-base font-medium  whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-10 w-[170px] max-w-full px-5 py-2.5 rounded-[500px]"
              >
                Become a tasker
              </Link>
            )}
            {accessToken ? (
              <Link to={"/create-task"}>
                <button className="text-white text-base font-bold  whitespace-nowrap justify-center items-center   max-w-full p-4  ">
                  <PenSquare />
                </button>
              </Link>
            ) : (
              <Link to={"/create-task"}>
                <button className="text-white text-base font-bold  whitespace-nowrap justify-center items-center   max-w-full px-5 py-2 bg-orange-400 rounded-[50px] ">
                  Post A Task
                </button>
              </Link>
            )}
            {accessToken && <UserNav />}
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-gray-900 ">☰</button>
        </div>
      </div>
    </nav>
  );
}
