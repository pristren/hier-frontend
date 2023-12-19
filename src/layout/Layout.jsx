import Navbar from "@/components/navbar/Navbar";
import React from "react";
import FacebookIcon from "../assets/clientImage/facebook.svg";
import LinkdinIcon from "../assets/clientImage/linkedin.svg";
import TweeterIcon from "../assets/clientImage/twetter.svg";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="items-center bg-cyan-900 self-stretch flex mt-0 w-full flex-col pt-16 pb-5 px-20 max-md:max-w-full max-md:px-5">
        <div className="self-center flex w-full max-w-[1200px] flex-col max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                <div className="grow max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start grow pt-16 max-md:mt-10">
                        <span className="font-bold block">How it works</span>
                        <br />
                        Airtasker for business
                        <br />
                        Earn money
                        <br />
                        Side Hustle <br />
                        Calculator
                        <br />
                        Search jobs
                        <br />
                        Cost Guides
                        <br />
                        Service Guides
                        <br />
                        Comparison Guides
                        <br />
                        Student Discount
                        <br />
                        New users FAQ
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-60 text-base leading-8 flex-1 my-auto max-md:mt-10 pt-16">
                        <span className="font-bold block">About us</span>
                        <br />
                        Careers
                        <br />
                        Media enquiries
                        <br />
                        Community Guidelines
                        <br />
                        Tasker Principles
                        <br />
                        Terms and Conditions
                        <br />
                        Blog
                        <br />
                        Contact us
                        <br />
                        Privacy policy
                        <br />
                        Investors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start pr-16 pt-16 max-md:mt-10 max-md:pr-5">
                  <span className="font-bold block">Post a task</span>
                  <br />
                  Browse tasks
                  <br />
                  Login
                  <br />
                  Support centre
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                <div className="max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start grow pr-11 pt-16 max-md:mt-10 max-md:pr-5">
                        <span className="font-bold block">
                          Handyman Services
                        </span>
                        <br />
                        Cleaning Services
                        <br />
                        Delivery Services
                        <br />
                        Removalists
                        <br />
                        Gardening Services
                        <br />
                        Auto Electricians
                        <br />
                        Assembly Services
                        <br />
                        All Services
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-60 text-base leading-8 self-stretch items-start pt-16 max-md:mt-10">
                        <span className="font-bold block">Sydney</span>
                        <br />
                        Melbourne
                        <br />
                        Brisbane
                        <br />
                        Perth
                        <br />
                        Adelaide
                        <br />
                        Newcastle
                        <br />
                        Canberra
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-stretch flex grow flex-col mt-36 max-md:max-w-full max-md:mt-10">
            <div className="items-start self-center flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-white text-base leading-8 grow shrink basis-auto self-start">
                Heir Pty. Ltd 2011-2023 ©, All rights reserved
              </div>
              <div className="items-start flex gap-4 self-start max-md:justify-center">
                <img
                  width={100}
                  height={100}
                  src={LinkdinIcon}
                  alt="Linkdin"
                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
                <img
                  width={100}
                  height={100}
                  src={FacebookIcon}
                  alt="Facebook"
                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
                <img
                  width={100}
                  height={100}
                  src={TweeterIcon}
                  alt="Tweeter"
                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
