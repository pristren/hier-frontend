import React, { useState } from "react";
import personImg from "../../../assets/clientImage/person.jpeg";
import verifiedIcon from "../../../assets/icons/verified.svg";
import premiumIcon from "../../../assets/icons/premium.svg";
import locationIcon from "../../../assets/icons/location.svg";
import profileIcon from "../../../assets/icons/profile.svg";

const PersonContainer = () => {
  const [state, setState] = useState("tasker");
  return (
    <div className="w-full pb-[20px] md:pb-[30px] flex items-stretch justify-stretch gap-5 flex-wrap">
      {/* person profile */}
      <div className=" sm:w-[30%] md:w-[20%] lg:w-[15%]  flex items-center justify-center order-1">
        <img
          src={personImg}
          alt="person image"
          width={500}
          height={500}
          className="rounded-[24px] w-full h-full object-cover"
        />
      </div>
      {/* info part */}
      <div className="w-fit grow bg-[#F4F8FD] rounded-[24px] p-4 md:p-6 flex flex-col justify-between order-3 xl:order-2">
        <div className="">
          <div className="w-full sm:flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-primary font-semibold font-clash text-2xl md:text-3xl">
                Md Manjurul Islam
              </h1>
              <img
                src={verifiedIcon}
                alt="verifiy badge"
                width={24}
                height={24}
              />
            </div>
            <div className="px-[6px] py-[5px] rounded-full bg-[#e78c3b1a] w-fit flex items-center gap-1">
              <img
                src={premiumIcon}
                alt="verifiy badge"
                width={13}
                height={13}
              />
              <p className="text-[11px] text-[#E78C3B] font-medium">
                Golden tasker
              </p>
            </div>
          </div>
          <div className="w-full pb-2.5 lg:pb-5">
            <h1 className="text-xl font-sans text-primary font-medium">
              UI/UX Designer
            </h1>
          </div>
        </div>
        <div className="pt-2.5 lg:pt-5 w-full grid sm:grid-cols-2 gap-3 border-t border-[#213f611a]">
          <div className="w-full flex flex-col gap-y-2.5">
            <div className="flex items-center gap-1.5">
              <img src={locationIcon} alt="Location" width={16} height={16} />
              <p className="text-primary text-base">
                Satkhira, Khulna, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={profileIcon} alt="profile" width={16} height={16} />
              <p className="text-primary text-base">Joined: 20th oct 2022</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2.5">
            <div className="flex items-center gap-1.5">
              <img
                src={"/icons/clock.svg"}
                alt="clock"
                width={16}
                height={16}
              />
              <p className="text-primary text-base">Activity: 2 hours ago</p>
            </div>
            <div className="flex items-center gap-1.5">
              <img src={"/icons/flag.svg"} alt="flag" width={16} height={16} />
              <p className="text-primary text-base">Report this member</p>
            </div>
          </div>
        </div>
      </div>
      {/* rating part */}
      <div className="w-fit grow bg-[#F4F8FD] rounded-[24px] p-4 md:p-6 flex flex-col justify-between order-2 xl:order-3">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-primary font-semibold font-clash text-2xl md:text-3xl">
            Rating
          </h1>
          <div className="px-[6px] py-[5px] rounded-full w-fit flex items-center gap-1">
            <button
              className={`${
                state === "tasker"
                  ? "bg-primary text-white"
                  : "bg-white text-secondary"
              } rounded-[6px] text-xs py-[6px] px-4 font-clash`}
              onClick={() => setState("tasker")}
            >
              Tasker
            </button>
            <button
              className={`${
                state === "poster"
                  ? "bg-primary text-white"
                  : "bg-white text-secondary"
              } rounded-[6px] text-xs py-[6px] px-4 font-clash`}
              onClick={() => setState("poster")}
            >
              Poster
            </button>
          </div>
        </div>
        {state === "tasker" ? (
          <div className="pt-[20px] grid grid-cols-2 gap-2">
            <div className="p-4 w-full h-full bg-white rounded-[16px] flex flex-col justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <h1 className="text-primary text-sm font-clash font-medium">
                    Completion rate
                  </h1>
                  <img
                    src={"/icons/info.svg"}
                    alt="info"
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-xs text-[#213F61B2]">184 tasks</p>
              </div>
              <div className="flex items-center gap-2 pt-[14px]">
                <img
                  src={"/icons/star.svg"}
                  alt="star"
                  width={35}
                  height={35}
                />
                <h1 className="text-primary text-2xl font-clash font-semibold pt-1">
                  4.6
                </h1>
              </div>
            </div>
            <div className="p-4 w-full h-full bg-white rounded-[16px] flex flex-col justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <h1 className="text-primary text-sm font-clash font-medium">
                    overall rating
                  </h1>
                  <img
                    src={"/icons/info.svg"}
                    alt="info"
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-xs text-[#213F61B2]">156 rating</p>
              </div>
              <h1 className="text-secondary text-2xl font-clash font-semibold pt-[14px]">
                99%
              </h1>
            </div>
          </div>
        ) : (
          <div className="pt-[20px] grid grid-cols-2 gap-2">
            <div className="p-4 w-full h-full bg-white rounded-[16px] flex flex-col justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <h1 className="text-primary text-sm font-clash font-medium">
                    Completion rate
                  </h1>
                  <img
                    src={"/icons/info.svg"}
                    alt="info"
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-xs text-[#213F61B2]">154 tasks</p>
              </div>
              <div className="flex items-center gap-2 pt-[14px]">
                <img
                  src={"/icons/star.svg"}
                  alt="star"
                  width={35}
                  height={35}
                />
                <h1 className="text-primary text-2xl font-clash font-semibold pt-1">
                  4.8
                </h1>
              </div>
            </div>
            <div className="p-4 w-full h-full bg-white rounded-[16px] flex flex-col justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <h1 className="text-primary text-sm font-clash font-medium">
                    overall rating
                  </h1>
                  <img
                    src={"/icons/info.svg"}
                    alt="info"
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-xs text-[#213F61B2]">13 rating</p>
              </div>
              <h1 className="text-secondary text-2xl font-clash font-semibold pt-[14px]">
                92%
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonContainer;
