import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/authApi";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  // const {from}=useSelector(state=>state.auth)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    redirect: false,
  });

  // console.log(from);
  const handleInputChange = (event) => {
    setFormData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      login(formData)
        .unwrap()
        .then((res) => {
          if (res.data.accessToken) {
            navigate(location?.state?.from || "/");
          }
        });
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="p-12 bg-white mx-auto rounded-2xl w-full sm:w-3/4 md:w-[60%] lg:w-[40%] shadow-xl  ">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
          <p className="text-gray-400 mt-2">Please sign in to your account.</p>
        </div>
        <div className="space-y-5 text-gray-700">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              onChange={handleInputChange}
              value={formData?.email}
              name="email"
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              onChange={handleInputChange}
              value={formData?.password}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              to="/signup"
            >
              Don&apos;t have an account?{" "}
              <span className="underline">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
