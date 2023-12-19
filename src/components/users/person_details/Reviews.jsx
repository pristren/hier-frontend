import React, { useState } from "react";

import profileImg from "../../../assets/profileImg/profile1.svg";

const Reviews = () => {
  const [state, setState] = useState("tasker");

  return (
    <div className="py-[30px] md:py-[45px] lg:py-[60px] w-full">
      <div className="w-full flex flex-wrap items-center justify-between pb-4 md:pb-6 border-b border-[#213f610d]">
        <h1 className="text-secondary font-semibold font-clash text-2xl">
          Reviews
        </h1>
        <div className="px-[6px] py-[5px] rounded-full w-fit flex items-center gap-1">
          <button
            className={`${
              state === "tasker"
                ? "bg-secondary text-white"
                : "bg-white text-secondary border"
            } rounded-[6px] text-xs py-[6px] px-4 font-clash`}
            onClick={() => setState("tasker")}
          >
            Tasker
          </button>
          <button
            className={`${
              state === "poster"
                ? "bg-secondary text-white"
                : "bg-white text-secondary border"
            } rounded-[6px] text-xs py-[6px] px-4 font-clash`}
            onClick={() => setState("poster")}
          >
            Poster
          </button>
        </div>
        <select className="w-fit h-fit rounded-[6px] bg-secondary text-white min-w-[100px] px-3 py-1.5 outline-none text-xs font-medium">
          <option className="bg-white text-secondary" value="1">
            Most recent
          </option>
          <option className="bg-white text-secondary" value="1">
            Newest
          </option>
        </select>
      </div>
      {/* single review container */}
      {state === "tasker" ? (
        <div className="w-full mt-5 md:mt-7 space-y-4">
          {[1, 2, 3, 4, 5]?.map((review, i) => (
            <div
              className="w-full bg-[#F4F8FD] rounded-[24px] p-4 md:p-5"
              key={i}
            >
              <div className="w-full flex items-center justify-between">
                <div className="w-fit flex items-center gap-2.5">
                  <img
                    src={profileImg}
                    alt="profile pic"
                    width={100}
                    height={70}
                    className="w-[44px] h-auto rounded-[50%]"
                  />
                  <div className="w-fit">
                    <h1 className="text-secondary font-clash font-semibold text-lg md:text-xl">
                      Eleanor Pena
                    </h1>
                    <p className="text-[#213F61CC] text-sm ">2 hours ago</p>
                  </div>
                </div>
                <div className="p-2.5 rounded-[50%] border-[#E78C3B29] border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_321)">
                      <path
                        d="M8.23253 1.91045C6.16625 0.729758 3.99463 0.61932 1.90625 1.56195V0.911133H0.96875V16.9111H1.90625V11.0757C3.83028 10.0665 5.85081 10.0979 7.76747 11.1931C8.91691 11.85 10.0988 12.1782 11.2812 12.1782C12.4632 12.1782 13.6456 11.8499 14.795 11.1931L15.0312 11.058V1.50945L14.33 1.91045C12.3359 3.05026 10.2275 3.05026 8.23253 1.91045Z"
                        fill="#E78C3B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_321">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.911133)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mt-4 md:mt-6 w-full text-secondary text-base font-sans">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use.
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-5 md:mt-7 space-y-4">
          {[1, 2, 3, 4, 5]?.map((review, i) => (
            <div
              className="w-full bg-[#F4F8FD] rounded-[24px] p-4 md:p-5"
              key={i}
            >
              <div className="w-full flex items-center justify-between">
                <div className="w-fit flex items-center gap-2.5">
                  <img
                    src={profileImg}
                    alt="profile pic"
                    width={100}
                    height={70}
                    className="w-[44px] h-auto rounded-[50%]"
                  />
                  <div className="w-fit">
                    <h1 className="text-secondary font-clash font-semibold text-lg md:text-xl">
                      Taha Zein
                    </h1>
                    <p className="text-[#213F61CC] text-sm ">5 hours ago</p>
                  </div>
                </div>
                <div className="p-2.5 rounded-[50%] border-[#E78C3B29] border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_321)">
                      <path
                        d="M8.23253 1.91045C6.16625 0.729758 3.99463 0.61932 1.90625 1.56195V0.911133H0.96875V16.9111H1.90625V11.0757C3.83028 10.0665 5.85081 10.0979 7.76747 11.1931C8.91691 11.85 10.0988 12.1782 11.2812 12.1782C12.4632 12.1782 13.6456 11.8499 14.795 11.1931L15.0312 11.058V1.50945L14.33 1.91045C12.3359 3.05026 10.2275 3.05026 8.23253 1.91045Z"
                        fill="#E78C3B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_321">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.911133)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mt-4 md:mt-6 w-full text-secondary text-base font-sans">
                <p>
                  It is From Poster a long established fact that a reader will
                  be distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using &apos;Content here, content here&apos;, making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
