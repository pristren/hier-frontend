import { useRegisterMutation } from "@/features/auth/authApi";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (event) => {
    setFormData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    };

    if (!formData.first_name) {
      errors.first_name = "First Name is required";
    }

    if (!formData.last_name) {
      errors.last_name = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);

        register(formData)
          .unwrap()
          .then((res) => {
            console.log(res);
            if (res.data.accessToken) {
              navigate("/signin");
            }
          });
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="p-6 bg-white mx-auto rounded-2xl w-full sm:w-3/4 md:w-[60%] lg:w-[45%] shadow-xl ">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
          <p className="text-gray-400 mt-2">
            Please sign up your account here.
          </p>
        </div>
        <form
          className="px-8 pt-6 pb-8 bg-white rounded"
          onSubmit={handleRegister}
        >
          <div className="mb-4 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                First Name
              </label>
              <input
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type="text"
                name="first_name"
                value={formData?.first_name}
                onChange={handleInputChange}
                placeholder="Your First Name"
              />
              {formErrors.first_name && (
                <p className="text-red-500">{formErrors.first_name}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Last Name
              </label>
              <input
                className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type="text"
                name="last_name"
                value={formData?.last_name}
                onChange={handleInputChange}
                placeholder="Your Last Name"
              />
              {formErrors.last_name && (
                <p className="text-red-500">{formErrors.last_name}</p>
              )}
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              value={formData?.email}
              name="email"
              onChange={handleInputChange}
              placeholder="mail@gmail.com"
            />
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-8 md:flex md:justify-between md:gap-4 space-y-2 md:space-y-0">
            <div className="space-y-2 w-full md:w-2/4 ">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type="password"
                value={formData?.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>
            <div className="space-y-2 w-full md:w-2/4">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password
              </label>
              <input
                className="w-full content-center text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                type="password"
                value={formData?.confirm_password}
                name="confirm_password"
                onChange={handleInputChange}
                placeholder="Confirm your password"
              />
              {formErrors.confirm_password && (
                <p className="text-red-500">{formErrors.confirm_password}</p>
              )}
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <hr className="mb-6 border-t" />

          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              to="/signin"
            >
              Already have an account?{" "}
              <span className="underline">Sign In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
