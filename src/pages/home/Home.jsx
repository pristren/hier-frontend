import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Invoices from "../../assets/clientImage/invoice 1.svg";
import JobIcon from "../../assets/clientImage/portfolio1.svg";
import Satisfaction from "../../assets/clientImage/satisfaction1.svg";
import PeopleGroup from "../../assets/clientImage/user 1.svg";
import Hero from "../../assets/h.png";
import CooseUs from "../../assets/clientImage/cooseus.svg";
import Talents from "../../assets/clientImage/talents.svg";
import Start1 from "../../assets/clientImage/Star1.svg";
import bg from "../../assets/bg.png";
import BG from "../../assets/clientImage/BG.svg";
import Checked from "../../assets/clientImage/Checked.svg";
import Stars from "../../assets/clientImage/starts.svg";

export default function Home() {
  const [jobType, setJobType] = useState("Starting a business");
  const [subscribe, setSubscribe] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser")) || {};
    setUser(user.user);
  }, []);

  // console.log(user);

  const jobs = [
    {
      title: "Logo designer for photography business",
      price: 50,
      category: "Starting a business",
      rating: "4.6(1K+)",
    },
    {
      title: "Web development",
      price: 550,
      category: "Starting a business",
      rating: "4.6(1K+)",
    },
    {
      title: "Couch moved 1km down the road",
      price: 450,
      rating: "4.6(1K+)",
      category: "Moving",
    },
    {
      title: "Pick up & deliver a medium size fridge",
      price: 360,
      rating: "4.6(1K+)",
      category: "others",
    },
    {
      title: "Break down and take away boxes",
      price: 963,
      rating: "4.6(1K+)",
      category: "Moving",
    },
    {
      title: "Help moving house",
      price: 758,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "Sofa delivery",
      price: 1800,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "End of lease Clean",
      price: 150,
      rating: "4.6(1K+)",
      category: "Pretties",
    },
    {
      title: "Urgent removalist",
      price: 30,
      rating: "4.6(1K+)",
      category: "Maintenance",
    },
    {
      title: "Break down and take away boxes",
      price: 500,
      rating: "4.6(1K+)",
      category: "Maintenance",
    },
  ];
  return (
    <main>
      <div className="bg-white flex flex-col">
        <div className="bg-[#213F61] md:flex w-full mx-auto pb-48 md:min-h-[75vh] items-center px-10 md:px-24 pt-10 md:pt-16">
          <div className="container mx-auto flex gap-10 flex-col sm:flex-row items-center justify-between">
            <div className="w-full md:w-2/4 flex flex-col items-center sm:items-start order-2 sm:order-1">
              <p className="text-3xl sm:text-5xl text-center sm:text-left md:text-3xl lg:text-5xl text-white leading-[2.5rem] sm:leading-[4rem] font-clash font-medium">
                Find work or want
                <br />
                to get it done, you will <br /> find everything here
              </p>

              <div className="w-[90%] sm:w-[50%] flex justify-center sm:justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <Link
                  to={"/create-task"}
                  className="w-full flex justify-center items-center bg-orange-400 text-white text-base font-bold self-center whitespace-nowrap md:px-8 lg:px-20 py-5 rounded-[50px] max-md:px-5"
                >
                  Post a task
                </Link>

                <Link
                  to={"/signup"}
                  className="w-full flex justify-center items-center md:px-8 lg:px-20 py-5 rounded-[500px] max-md:px-5 text-orange-400 bg-orange-400 bg-opacity-10 text-base font-medium self-center whitespace-nowrap"
                >
                  Become a tasker
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[38%] flex justify-center order-1 sm:order-2">
              <img src={Hero} className="w-full" alt="hero" />
            </div>
          </div>
        </div>

        <div className="container mt-24 mb-36 lg:mt-0 lg:mb-0 flex justify-center items-center mx-auto md:shadow-2xl bg-white md:self-stretch md:-translate-y-2/4 pl-28 pr-16 md:py-12 md:rounded-[500px] max-md:max-w-full max-md:px-5">
          <div className="gap-5 w-full flex justify-between max-md:flex-col max-md:gap-0">
            <div className="flex items-center justify-center flex-col w-1/5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 max-md:mt-10">
                <img
                  width={100}
                  height={100}
                  src={JobIcon}
                  alt="jobicon"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-center">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    500k
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Job posted
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 my-auto max-md:mt-10">
                <img
                  width={100}
                  height={100}
                  alt="people-group"
                  src={PeopleGroup}
                  className="aspect-square object-contain object-center w-[55px] overflow-hidden max-w-full self-start"
                />
                <div className="flex flex-col items-center">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    1 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Quality talents
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-5 my-auto max-md:mt-10">
                <img
                  width={100}
                  height={100}
                  src={Invoices}
                  alt="invoices"
                  className="aspect-square object-contain object-center w-[61px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-center">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    8 Million
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Paid Invoices
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-3 my-auto max-md:mt-10">
                <img
                  width={100}
                  height={100}
                  src={Satisfaction}
                  alt="satisfaction"
                  className="aspect-square object-contain object-center w-[68px] overflow-hidden max-w-full"
                />
                <div className="flex flex-col items-center">
                  <div className="text-cyan-900 text-center text-2xl font-semibold leading-9 whitespace-nowrap">
                    99%
                  </div>
                  <div className="text-cyan-900 text-center text-base font-medium leading-6 whitespace-nowrap mt-3">
                    Customer satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex items-center justify-center   w-10/12  max-w-full flex-col mt-24 max-md:mt-10 mx-auto mb-24">
            <div className="items-center  flex flex-col px-5">
              <div className="text-cyan-900 text-2xl sm:text-4xl text-center font-semibold tracking-wider">
                Boost Your business by connecting quality talents
              </div>
              <div className="text-cyan-900 text-center text-base leading-6 mt-4 ">
                Connect with unlimited quality talents to get any help
              </div>
            </div>
            <div className="bg-orange-400  flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
          </div>

          <div className="bg-[#213F61] px-3 rounded-3xl">
            <div className="grid justify-start items-end grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
              <div className="px-5 pt-32 pb-12">
                <figure className="mb-8 w-14 h-14">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 1.90115C0 0.851184 0.851184 0 1.90115 0H52.5986C53.6485 0 54.4997 0.851184 54.4997 1.90115C54.4997 2.95112 53.6485 3.80231 52.5986 3.80231H50.0637V21.1662C50.0637 26.8448 50.0637 29.6841 48.9585 31.8532C47.9864 33.7609 46.4353 35.312 44.5275 36.2841C42.3585 37.3894 39.5192 37.3894 33.8405 37.3894H29.151V43.9177L40.9024 50.9684C41.8028 51.5086 42.0946 52.6764 41.5544 53.5768C41.0142 54.4772 39.8464 54.7689 38.946 54.2288L29.151 48.3517V52.5986C29.151 53.6485 28.2998 54.4997 27.2499 54.4997C26.1999 54.4997 25.3487 53.6485 25.3487 52.5986V48.3517L15.5536 54.2288C14.6533 54.7689 13.4855 54.4772 12.9453 53.5768C12.4051 52.6764 12.697 51.5086 13.5974 50.9684L25.3487 43.9177V37.3894H20.6592C14.9806 37.3894 12.1412 37.3894 9.97228 36.2841C8.06441 35.312 6.51328 33.7609 5.54115 31.8532C4.43602 29.6841 4.43602 26.8448 4.43602 21.1662V3.80231H1.90115C0.851184 3.80231 0 2.95112 0 1.90115ZM38.4436 18.6923C39.3171 18.1099 39.5534 16.9295 38.9709 16.0559C38.3886 15.1822 37.2081 14.9461 36.3346 15.5285L30.0263 19.7337L26.0587 15.7661C25.4179 15.1252 24.4139 15.0258 23.66 15.5285L16.0552 20.5982C15.1816 21.1806 14.9455 22.3611 15.5279 23.2346C16.1103 24.1084 17.2907 24.3444 18.1643 23.7619L24.4722 19.5568L28.4397 23.5244C29.0806 24.1652 30.0846 24.2645 30.8387 23.7619L38.4436 18.6923Z"
                      fill="white"
                    />
                  </svg>
                </figure>

                <div>
                  <h1 className="mb-8 text-3xl font-semibold">
                    {" "}
                    Post any task{" "}
                  </h1>
                  <p className="text-lg font-normal">
                    {" "}
                    Lorem ipsum is a placeholder text that is commonly used in
                    graphic design, publishing, and typesetting. It is an
                    industry-standard mock-up text, which is primarily.{" "}
                  </p>
                </div>
              </div>
              <div className="px-5 pt-28 mt-4 pb-12 rounded-t-3xl rounded-b-3xl sm:rounded-b-none bg-[#E78C3B] sm:mx-3">
                <figure className="mb-8 w-14 h-14">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 57 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0682749 32.0031C-0.0782381 31.1744 0.0553818 30.3411 0.12688 29.5241C0.336734 27.0746 0.871618 24.6639 1.71743 22.3555C2.9624 18.9367 4.85916 15.792 7.3025 13.0959C10.9888 9.02403 15.4885 6.29769 20.7641 4.81264C21.888 4.49069 23.035 4.25558 24.1949 4.10937C24.5348 4.06718 24.6461 3.97694 24.611 3.59718C24.5008 2.39577 24.1996 1.21547 24.223 0H25.0435C25.0505 0.253174 25.2779 0.290658 25.4338 0.385598C28.8962 2.4274 32.3609 4.46571 35.828 6.50048C36.2371 6.7349 36.3355 6.89666 35.9194 7.23422C32.6977 9.85739 29.4818 12.488 26.2718 15.126C26.2144 15.174 26.1476 15.2104 26.021 15.2936C25.7866 14.4087 25.7725 13.5355 25.6319 12.6845C25.6131 12.5673 25.6119 12.4501 25.6026 12.3329C25.5686 11.9004 25.4443 11.7105 24.9122 11.8066C21.3338 12.4274 17.9868 13.9948 15.2189 16.3462C11.6147 19.3936 9.27399 23.2311 8.25074 27.8492C7.98467 29.0482 7.79947 30.2661 7.82642 31.5003C7.83697 31.9691 7.67054 32.1098 7.21694 32.0934C5.72602 32.043 5.87488 32.3278 5.96514 30.7747C6.20717 26.1807 7.9009 21.7821 10.8024 18.2121C14.3023 13.8425 18.8266 11.1104 24.3332 10.0402C25.1552 9.8758 25.988 9.77083 26.8251 9.72612C27.1955 9.70854 27.3654 9.84332 27.3842 10.2172C27.4017 10.5478 27.4803 10.8736 27.5014 11.2041C27.5213 11.5886 27.6631 11.6659 27.9573 11.421C29.6076 10.0496 31.2568 8.67667 32.9048 7.30218C33.0911 7.1463 33.1544 7.01736 32.8931 6.86265C30.8278 5.646 28.7672 4.42352 26.641 3.16468C26.5344 3.73432 26.6774 4.21956 26.7278 4.70481C26.8286 5.64836 26.8591 5.65657 25.939 5.73979C23.7019 5.93493 21.4999 6.42196 19.3892 7.18849C13.4537 9.36392 8.83093 13.1475 5.58186 18.5755C3.65266 21.8027 2.45252 25.4127 2.06554 29.1526C1.9624 30.1008 1.81941 31.042 1.84168 31.9984L0.0682749 32.0031Z"
                      fill="white"
                    />
                    <path
                      d="M22.6995 59.9988C22.7698 59.6179 22.8354 59.2358 22.9081 58.8549C23.105 57.8269 22.9995 58.0613 23.8903 58.1516C24.8514 58.2489 24.8421 58.2817 24.7108 59.244C24.6902 59.4951 24.6832 59.747 24.6897 59.9988H22.6995Z"
                      fill="white"
                    />
                    <path
                      d="M30.3159 59.9988C30.3159 59.9015 30.3265 59.8042 30.3253 59.7069C30.3253 58.3801 30.3253 58.3848 31.6533 58.3578C31.9428 58.352 32.0963 58.4516 32.1362 58.7294C32.196 59.1525 32.2534 59.5757 32.3073 59.9988H30.3159Z"
                      fill="white"
                    />
                    <path
                      d="M26.5664 59.9988C26.5664 59.6085 26.5816 59.2193 26.5816 58.8267C26.5816 58.4669 26.7504 58.3578 27.1032 58.4012C28.2296 58.5325 28.232 58.5184 28.4043 59.6483C28.4218 59.7655 28.4289 59.8828 28.4418 60L26.5664 59.9988Z"
                      fill="white"
                    />
                    <path
                      d="M28.3829 47.5933C20.2755 47.7504 13.0073 41.1561 13.0284 32.3747C13.0506 23.6402 19.8992 17.1983 28.3478 17.237C36.6814 17.2733 43.6027 24.2227 43.5335 32.5587C43.4644 41.0952 36.5982 47.7492 28.3829 47.5933ZM41.7449 32.5189C41.7777 25.0831 35.7789 19.1675 28.1591 19.1229C21.0819 19.0819 15.0315 25.1135 14.9846 32.2505C14.9389 39.684 20.8686 45.691 28.3337 45.7719C35.6582 45.8492 41.7144 39.8645 41.7484 32.5189H41.7449Z"
                      fill="white"
                    />
                    <path
                      d="M0.0685327 32.0031L1.8349 31.9949C2.00368 32.5282 1.92398 33.0802 1.95211 33.6241C1.95687 33.6429 1.95687 33.6627 1.95211 33.6815C1.66495 34.2676 1.13164 33.8995 0.721403 33.9804C0.492842 34.0249 0.100184 34.1246 0.102528 33.6862C0.106045 33.1248 -0.104939 32.5668 0.0685327 32.0031Z"
                      fill="white"
                    />
                    <path
                      d="M10.4663 53.9906C10.3011 53.9836 9.12545 52.9638 9.13014 52.8126C9.14176 52.719 9.17862 52.6303 9.23679 52.556C9.30843 52.4643 9.38678 52.3781 9.47121 52.2981C10.4253 51.303 10.5402 51.3077 11.4755 52.3661C11.534 52.4173 11.5824 52.4789 11.6185 52.5477C11.6877 52.7318 10.6644 54 10.4663 53.9906Z"
                      fill="white"
                    />
                    <path
                      d="M43.1646 56.1016C43.1271 56.1497 43.0943 56.2259 43.0357 56.261C42.602 56.5224 42.1859 56.9232 41.7194 56.9994C41.0068 57.1166 41.1334 56.2798 40.8227 55.9199C40.6411 55.7136 40.5801 55.4605 40.94 55.3233C40.9931 55.2984 41.0441 55.269 41.0923 55.2354C42.2562 54.5322 42.5364 54.6283 43.0849 55.9129L43.1646 56.1016Z"
                      fill="white"
                    />
                    <path
                      d="M8.93916 50.2105C8.88994 50.2715 8.82196 50.3664 8.74578 50.445C8.54502 50.6306 8.35373 50.8262 8.17263 51.031C7.83272 51.4682 7.53616 51.4846 7.24665 50.9935C7.2368 50.9768 7.22583 50.9607 7.21383 50.9455C6.35468 49.8788 6.37577 49.7464 7.53499 48.9892C7.61268 48.9346 7.70228 48.8992 7.79636 48.8861C7.92178 48.8755 8.94385 50.0382 8.93916 50.2105Z"
                      fill="white"
                    />
                    <path
                      d="M49.3636 39.9277C49.1468 40.4352 49.0437 41.0787 48.6674 41.4362C48.3474 41.7433 47.9055 41.183 47.5047 41.0424C47.3031 40.9709 46.9983 40.8971 47.0944 40.5736C47.2234 40.1457 47.4004 39.732 47.5574 39.3124C47.5645 39.2936 47.5703 39.2678 47.5844 39.2608C48.0673 39.0182 48.4107 39.4542 48.8292 39.5315C49.0261 39.5714 49.3062 39.6066 49.3636 39.9277Z"
                      fill="white"
                    />
                    <path
                      d="M36.0368 58.9896C36.0509 59.3037 35.2034 59.8441 34.5517 59.7222C33.7617 59.5733 34.1474 58.7329 33.934 58.2277C33.8356 57.9933 34.792 57.5573 35.3992 57.5526C35.6629 57.5514 36.0087 58.3285 36.0368 58.9896Z"
                      fill="white"
                    />
                    <path
                      d="M47.7486 50.0699C47.983 50.1355 48.1201 50.3406 48.2854 50.4965C49.1305 51.3018 49.1281 51.3041 48.3065 52.1258C47.7497 52.6813 47.7498 52.6813 47.2059 52.1258C46.4253 51.324 46.4229 51.3217 47.2223 50.5211C47.3864 50.357 47.5141 50.1531 47.7486 50.0699Z"
                      fill="white"
                    />
                    <path
                      d="M49.0085 35.7621C49.386 36.0188 50.2416 35.6226 50.3283 36.3177C50.3893 36.8135 50.4338 37.6878 49.7282 37.8613C49.0859 38.0195 48.2619 37.5167 48.2748 37.2413C48.3182 36.2626 48.5467 35.7492 49.0085 35.7621Z"
                      fill="white"
                    />
                    <path
                      d="M56.5569 34.7388C56.394 35.0295 56.8241 35.8007 55.9931 35.7117C55.5243 35.6624 54.6815 35.9601 54.6194 35.1666C54.5151 33.8257 54.644 33.7413 55.5043 33.7601C56.5499 33.7882 56.578 33.8117 56.5569 34.7388Z"
                      fill="white"
                    />
                    <path
                      d="M0.323029 36.3996C0.323029 36.0035 0.940741 35.7479 1.86084 35.7597C2.16325 35.7597 2.54066 36.4852 2.38829 37.1873C2.22068 37.9538 1.38615 37.5987 0.87394 37.8108C0.618422 37.9163 0.319512 37.1545 0.323029 36.3996Z"
                      fill="white"
                    />
                    <path
                      d="M28.3244 53.5101C28.3068 54.565 28.5014 54.4876 27.3047 54.4782C27.1312 54.4782 26.9531 54.4407 26.7843 54.4243C26.4526 54.3927 26.2791 54.2567 26.3952 53.891C26.4284 53.7587 26.4457 53.623 26.4467 53.4866C26.503 52.5396 26.5018 52.5396 27.4653 52.6029C28.3244 52.6603 28.3244 52.6603 28.3244 53.5101Z"
                      fill="white"
                    />
                    <path
                      d="M38.6812 56.4228C38.8769 56.3911 38.9567 56.4486 38.9977 56.54C39.1876 56.9666 39.3751 57.3944 39.5544 57.8293C39.5759 57.8746 39.5803 57.9261 39.5667 57.9744C39.5531 58.0227 39.5225 58.0644 39.4806 58.0918C39.0249 58.3525 38.5392 58.5567 38.0342 58.7002C37.9849 58.7085 37.9341 58.6982 37.8921 58.6711C37.85 58.6439 37.8196 58.6021 37.8068 58.5536C37.6333 58.0989 37.4634 57.6429 37.3028 57.1835C37.2954 57.1481 37.2968 57.1114 37.3068 57.0767C37.3168 57.042 37.3352 57.0102 37.3603 56.9842C37.8221 56.7744 38.2909 56.581 38.6812 56.4228Z"
                      fill="white"
                    />
                    <path
                      d="M39.4958 51.3651C39.5098 51.521 38.3131 52.2571 37.958 52.311C37.7786 52.3379 37.2172 51.3827 37.1516 50.9373C37.1211 50.731 38.0998 50.0113 38.4772 49.9633C38.6565 49.9398 39.4665 51.0569 39.4958 51.3651Z"
                      fill="white"
                    />
                    <path
                      d="M24.0592 54.1347C23.3911 54.1254 22.5929 53.7597 22.5894 53.4608C22.5894 52.9486 22.9621 51.9945 23.1754 51.9921C23.9408 51.9827 24.7097 52.3356 24.6921 52.6954C24.6429 53.6096 24.4108 54.1394 24.0592 54.1347Z"
                      fill="white"
                    />
                    <path
                      d="M34.424 53.66C34.1462 53.6659 33.7442 52.8185 33.7336 52.2043C33.7336 51.9511 34.628 51.4776 35.1296 51.467C35.3641 51.467 35.9431 52.5583 35.9278 52.9744C35.9184 53.2311 35.0089 53.6471 34.424 53.66Z"
                      fill="white"
                    />
                    <path
                      d="M17.6608 56.5657C17.4943 56.9971 17.4263 57.5515 17.1181 57.8761C16.7665 58.2454 16.3551 57.7414 15.9847 57.6054C15.7502 57.521 15.2943 57.4882 15.4057 57.1037C15.5381 56.6454 15.8194 56.2293 16.0409 55.798C16.0731 55.7503 16.1201 55.7145 16.1746 55.696C16.307 55.648 17.5694 56.2317 17.6268 56.3677C17.6445 56.4324 17.6559 56.4988 17.6608 56.5657Z"
                      fill="white"
                    />
                    <path
                      d="M8.03652 34.924C8.06348 35.5429 7.54425 35.9391 6.6429 35.8183C5.8447 35.7117 6.12131 34.8467 6.11311 34.3837C6.0967 33.3991 7.0414 33.8597 7.48212 33.8222C8.4491 33.7378 7.57236 34.747 8.03652 34.924Z"
                      fill="white"
                    />
                    <path
                      d="M41.5178 47.9191C41.8295 48.0645 41.9972 48.3294 42.1882 48.5685C42.7473 49.2717 42.7473 49.2717 42.0522 49.7945C41.1685 50.4673 41.1603 50.4731 40.5437 49.5343C40.4101 49.3315 40.0421 49.1076 40.2847 48.8533C40.6303 48.4638 41.0493 48.1464 41.5178 47.9191Z"
                      fill="white"
                    />
                    <path
                      d="M16.9831 51.3826C16.8331 51.3885 15.5496 50.6114 15.5098 50.4754C15.4945 50.4035 15.5032 50.3286 15.5344 50.2621C15.5792 50.1763 15.6322 50.0951 15.6926 50.0195C16.5049 48.8568 16.6221 48.8392 17.7485 49.7171C17.8095 49.764 17.888 49.805 17.9196 49.8683C18.0052 50.0312 17.1671 51.3733 16.9831 51.3826Z"
                      fill="white"
                    />
                    <path
                      d="M21.1922 51.6839C21.0621 52.018 20.8804 52.4891 20.6917 52.9568C20.6733 53.0037 20.6378 53.0419 20.5923 53.0636C20.5468 53.0854 20.4948 53.0891 20.4468 53.074C19.9611 52.9349 19.4948 52.7352 19.059 52.4798C19.0178 52.4527 18.9863 52.4132 18.9688 52.3672C18.9514 52.3211 18.9489 52.2707 18.9617 52.2231C18.9682 52.165 18.9853 52.1086 19.0121 52.0566C19.2383 51.6523 19.2629 50.9537 19.638 50.8681C20.0541 50.772 20.5757 51.126 21.0445 51.2889C21.1629 51.3252 21.259 51.3897 21.1922 51.6839Z"
                      fill="white"
                    />
                    <path
                      d="M10.3959 42.2239C10.4158 42.4466 10.2787 42.5298 10.1415 42.6036C8.69983 43.3643 9.12648 43.6116 8.24272 42.0961C7.9954 41.6718 8.0751 41.4749 8.53574 41.2756C9.82506 40.7341 9.81333 40.713 10.3232 42.0293C10.3513 42.1066 10.3783 42.1793 10.3959 42.2239Z"
                      fill="white"
                    />
                    <path
                      d="M2.67532 39.2666C2.92029 39.2666 3.45127 40.2922 3.42549 40.7153C3.41494 40.9005 2.19476 41.476 1.8572 41.4561C1.68841 41.4456 1.20433 40.2477 1.20902 39.8538C1.21605 39.6382 2.13615 39.2678 2.67532 39.2666Z"
                      fill="white"
                    />
                    <path
                      d="M12.4683 45.2643C12.3944 45.514 12.1506 45.6629 11.949 45.8293C10.9727 46.6299 11.2305 46.5736 10.5425 45.7051C9.9412 44.9432 9.94119 44.9315 10.764 44.3513C10.9867 44.193 11.1731 43.9094 11.5118 43.9996C11.6595 44.0418 12.4683 45.1085 12.4683 45.2643Z"
                      fill="white"
                    />
                    <path
                      d="M50.2488 47.3636C50.6121 47.6273 51.0447 47.9262 51.4537 48.252C51.551 48.3306 51.4361 48.4724 51.3716 48.565C51.2549 48.768 51.114 48.9561 50.9521 49.1252C50.7176 49.3327 50.6391 49.866 50.2664 49.7207C49.7858 49.5331 49.4166 49.1123 49.0943 48.6904C49.0707 48.6465 49.0623 48.596 49.0704 48.5469C49.0784 48.4977 49.1025 48.4525 49.1388 48.4185C49.392 48.0973 49.6498 47.7785 49.9077 47.4597C49.9757 47.3788 50.0589 47.3425 50.2488 47.3636Z"
                      fill="white"
                    />
                    <path
                      d="M30.61 54.4419C30.2865 54.4818 30.2514 54.252 30.2244 54.0387C30.1787 53.6742 30.1517 53.3073 30.1177 52.9416C30.1177 52.9029 30.0978 52.8549 30.1177 52.8244C30.4776 52.2102 31.114 52.6322 31.5946 52.4376C31.829 52.3427 31.9111 52.5548 31.9556 52.7693C32.2533 54.2075 32.0669 54.4407 30.61 54.4419Z"
                      fill="white"
                    />
                    <path
                      d="M44.9074 55.0303C44.8537 55.0336 44.8001 55.0218 44.7528 54.9961C44.7056 54.9704 44.6665 54.9318 44.6401 54.8849C44.5686 54.7923 44.5006 54.6974 44.4303 54.6048C43.6942 53.6448 43.7083 53.6671 44.6073 52.8877C44.9718 52.5747 45.1805 52.5794 45.5052 52.9545C46.4897 54.0949 46.4264 53.8558 45.3176 54.7536C45.1828 54.8626 45.0293 54.9494 44.9074 55.0303Z"
                      fill="white"
                    />
                    <path
                      d="M6.76716 38.2177C6.76251 38.1787 6.76251 38.1394 6.76716 38.1004C7.00862 37.5449 7.58762 37.7172 8.00606 37.5296C8.2229 37.4312 8.47491 37.457 8.57337 37.757C8.58945 37.7921 8.60353 37.8281 8.61555 37.8648C8.69877 38.2739 9.12189 38.7451 8.87927 39.0534C8.57452 39.4402 7.95802 39.4929 7.46573 39.6629C7.33797 39.7074 7.22077 39.6804 7.17857 39.5457C7.02972 39.0909 6.89375 38.6267 6.76716 38.2177Z"
                      fill="white"
                    />
                    <path
                      d="M55.0507 41.6542C54.8526 42.102 54.6615 42.5462 54.4646 42.9869C54.4538 43.0145 54.4376 43.0397 54.4169 43.061C54.3963 43.0824 54.3717 43.0994 54.3444 43.1112C54.3172 43.1229 54.2879 43.1292 54.2583 43.1296C54.2286 43.13 54.1991 43.1245 54.1716 43.1135C53.7239 42.9283 53.2831 42.7291 52.8436 42.5274C52.8026 42.5087 52.7534 42.422 52.7663 42.388C52.9429 41.8973 53.1277 41.4085 53.3207 40.9217C53.3364 40.8984 53.3577 40.8795 53.3828 40.8668C53.4078 40.8541 53.4356 40.848 53.4636 40.849C53.9903 40.9764 54.4976 41.1735 54.9721 41.435C55.0155 41.4655 55.0214 41.5698 55.0507 41.6542Z"
                      fill="white"
                    />
                    <path
                      d="M51.968 44.2328C52.4158 44.4802 52.9561 44.6279 53.364 45.0006C53.4812 45.1119 53.364 45.2936 53.303 45.4366C52.7603 46.7177 52.2669 46.8267 51.2296 45.8937C51.1975 45.8718 51.168 45.8462 51.1417 45.8175C51.0303 45.6394 51.7219 44.2469 51.968 44.2328Z"
                      fill="white"
                    />
                    <path
                      d="M46.6221 44.8728C46.4733 44.8728 45.368 44.0582 45.3328 43.907C45.266 43.6386 45.4829 43.4792 45.6012 43.2905C46.1674 42.3809 46.1721 42.3845 47.1098 42.9529C47.7579 43.3456 47.7591 43.3456 47.3442 44.0008C47.1988 44.2352 47.0476 44.4579 46.8953 44.683C46.8273 44.7779 46.7616 44.8799 46.6221 44.8728Z"
                      fill="white"
                    />
                    <path
                      d="M21.1933 57.8538C20.7725 58.2687 21.2413 59.2369 20.4056 59.1935C19.9497 59.1701 19.046 59.2721 19.0085 58.4586C18.9757 57.7331 19.5277 56.9935 19.795 57.1119C20.2591 57.3158 20.9073 57.2209 21.1933 57.8538Z"
                      fill="white"
                    />
                    <path
                      d="M4.72283 44.0371C4.74275 44.1813 4.63846 44.2446 4.53883 44.3032C3.01509 45.1928 3.3046 45.3851 2.57438 43.8015C2.40325 43.4312 2.46772 43.2671 2.83459 43.0924C4.05592 42.5064 4.33488 42.6236 4.68534 43.9258C4.69589 43.9633 4.70994 43.9985 4.72283 44.0371Z"
                      fill="white"
                    />
                    <path
                      d="M14.6096 54.9693C14.3752 55.3784 14.1408 55.8519 13.7388 56.1977C13.5665 56.3454 13.3766 56.1449 13.2148 56.0488C12.0521 55.3455 12.0709 55.3619 12.8632 54.2754C13.1398 53.898 13.3543 53.8535 13.7024 54.1418C13.9099 54.3141 14.1607 54.4348 14.3858 54.5884C14.4556 54.6238 14.5139 54.6785 14.5536 54.746C14.5932 54.8135 14.6127 54.891 14.6096 54.9693Z"
                      fill="white"
                    />
                    <path
                      d="M50.7057 33.0978C50.5826 33.3955 51.0022 34.0214 50.1642 34.0003C48.9827 33.971 48.8127 33.9019 48.8291 33.2361C48.8608 31.9339 48.6287 32.1168 50.0575 32.1051C50.7127 32.0945 50.7127 32.1039 50.7057 33.0978Z"
                      fill="white"
                    />
                    <path
                      d="M45.3798 46.7083C45.3715 46.7986 44.3014 47.8992 44.1713 47.891C43.9509 47.8781 43.8502 47.6847 43.7154 47.5523C42.9031 46.7576 42.9371 46.781 43.6122 45.9113C43.9697 45.4507 44.2217 45.4073 44.5991 45.8374C44.7935 46.0283 44.999 46.2076 45.2145 46.3743C45.2977 46.4481 45.4044 46.5185 45.3798 46.7083Z"
                      fill="white"
                    />
                    <path
                      d="M55.3402 39.4764C54.4834 39.3897 53.8739 39.0568 54.0356 38.7662C54.2841 38.3184 53.7824 37.3901 54.7014 37.4405C55.1374 37.4651 55.9907 37.2166 56.0458 38.0266C56.0985 38.8681 55.673 39.5093 55.3402 39.4764Z"
                      fill="white"
                    />
                    <path
                      d="M13.9428 46.4844C14.1538 46.7845 14.2945 47.0975 14.5289 47.2838C14.9895 47.6495 15.0915 47.8886 14.6261 48.4008C13.74 49.3749 13.8912 49.2377 13.0649 48.4418C12.4964 47.8956 12.5023 47.8875 13.0778 47.3155C13.3017 47.0869 13.542 46.8665 13.9428 46.4844Z"
                      fill="white"
                    />
                    <path
                      d="M6.63459 47.2147C6.64189 47.2801 6.63187 47.3462 6.60554 47.4065C6.57921 47.4668 6.53748 47.5191 6.48455 47.5582C5.50819 48.5615 5.19526 48.5193 4.4791 47.3237C4.29156 47.012 4.27046 46.7963 4.64436 46.6357C4.80376 46.5665 4.93857 46.4388 5.09797 46.3708C5.35349 46.2618 5.59376 45.902 5.87272 46.1094C6.24193 46.3907 6.42947 46.8455 6.63459 47.2147Z"
                      fill="white"
                    />
                    <path
                      d="M28.3632 43.0173C22.8778 43.1521 18.0276 38.4602 17.9068 32.9044C17.7814 27.1025 22.314 22.1984 27.8522 22.0238C33.7783 21.8386 38.7117 26.3383 38.8254 32.2808C38.9485 38.6817 33.7689 43.1498 28.3632 43.0173ZM28.3269 25.0455C27.3892 25.0455 27.3517 25.0454 27.3997 25.7686C27.429 26.2269 27.2415 26.3828 26.8488 26.5504C25.2829 27.2173 24.4531 29.0119 24.868 30.6774C25.1868 31.9585 26.3495 33.3439 28.4534 33.4061C29.3173 33.4318 29.9385 34.1093 29.9877 34.9556C30.0209 35.348 29.9119 35.7392 29.6806 36.0579C29.4493 36.3766 29.1111 36.6015 28.7277 36.6915C27.9002 36.8895 27.0059 36.4981 26.7973 35.6905C26.6379 35.0787 26.3354 34.9872 25.8209 35.0529C25.6462 35.0763 25.4693 35.0763 25.2946 35.0529C24.807 34.9802 24.7332 35.224 24.8059 35.6296C25.0403 36.9189 25.774 37.8132 26.9496 38.3652C27.1466 38.4578 27.3986 38.4731 27.3962 38.813C27.3939 39.1529 27.2134 39.6147 27.504 39.7987C27.7572 39.9581 28.1862 39.8421 28.5367 39.848C28.5757 39.8444 28.6149 39.8444 28.6539 39.848C29.1227 39.9265 29.3571 39.7741 29.2634 39.2619C29.1696 38.7497 29.3712 38.5024 29.8776 38.2844C31.3474 37.6538 32.1444 35.9484 31.8162 34.3414C31.6552 33.5819 31.2513 32.8954 30.6655 32.3858C30.0798 31.8761 29.344 31.571 28.5695 31.5166C28.3166 31.5066 28.0655 31.4697 27.8205 31.4065C27.0504 31.1838 26.6039 30.491 26.6637 29.6565C26.6944 29.2835 26.8499 28.9318 27.1051 28.6581C27.3603 28.3844 27.7003 28.2047 28.0702 28.148C28.8168 28.0249 29.6783 28.4246 29.8389 29.1642C29.9912 29.8675 30.3898 29.8276 30.8809 29.8077C31.0564 29.793 31.2328 29.793 31.4083 29.8077C31.8186 29.8581 31.9123 29.6729 31.8525 29.3002C31.6369 27.9781 30.8984 27.0532 29.6923 26.5199C29.3407 26.3652 29.2481 26.1871 29.2575 25.8308C29.2809 25.0408 29.2575 25.0408 28.4488 25.0408L28.3269 25.0455Z"
                      fill="white"
                    />
                  </svg>
                </figure>

                <div>
                  <h1 className="mb-8 text-3xl font-semibold">
                    Pick the best person
                  </h1>
                  <p className="text-lg font-normal">
                    Lorem ipsum is a placeholder text that is commonly used in
                    graphic design, publishing, and typesetting. It is an
                    industry-standard mock-up text, which is primarily.{" "}
                  </p>
                </div>
              </div>
              <div className="px-5 pt-32 pb-12">
                <figure className="mb-8 w-14 h-14">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 59 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.9676 47.6652C28.9676 48.958 28.5184 50.1459 27.7723 51.0887H48.2628C48.6469 51.0887 49.0006 50.8795 49.1857 50.5429L58.4553 33.6889C58.8415 32.9869 58.3336 32.1279 57.5324 32.1279H30.6213L24.6147 42.2641C27.1001 42.8056 28.9676 45.0202 28.9676 47.6652Z"
                      fill="white"
                    />
                    <path
                      d="M54.7754 0H37.9214C37.0487 0 36.3413 0.707424 36.3413 1.58006V18.4341C36.3413 19.3067 37.0487 20.0141 37.9214 20.0141H54.7754C55.648 20.0141 56.3554 19.3067 56.3554 18.4341V1.58006C56.3554 0.707424 55.648 0 54.7754 0ZM53.0533 5.79458L47.2598 15.8016C47.0715 16.127 46.7243 16.3273 46.3484 16.3273C45.9724 16.3273 45.6252 16.127 45.437 15.8016L39.6434 5.79458C39.3518 5.2913 39.5236 4.64682 40.0271 4.35519C40.5306 4.06329 41.1751 4.23561 41.4662 4.73915L46.3484 13.1716L51.2305 4.73915C51.5211 4.23561 52.1661 4.06331 52.6697 4.35519C53.1732 4.64684 53.345 5.2913 53.0533 5.79458Z"
                      fill="white"
                    />
                    <path
                      d="M14.22 23.1743C18.8741 23.1743 22.647 19.4014 22.647 14.7473C22.647 10.0932 18.8741 6.32031 14.22 6.32031C9.56586 6.32031 5.79297 10.0932 5.79297 14.7473C5.79297 19.4014 9.56586 23.1743 14.22 23.1743Z"
                      fill="white"
                    />
                    <path
                      d="M2.63344 51.0886H23.4376C25.3252 51.0886 26.8611 49.5528 26.8611 47.6652C26.8611 45.7775 25.3252 44.2417 23.4376 44.2417H7.37362C6.79189 44.2417 6.32025 43.7701 6.32025 43.1883C6.32025 42.6066 6.79189 42.135 7.37362 42.135H22.2425L28.3084 31.8985V27.8719C28.3084 27.6122 28.2678 27.3856 28.1875 27.1984C27.6891 26.0337 26.5483 25.2809 25.281 25.2809H4.2135C1.89022 25.2809 0 27.1712 0 29.4944V48.4552C0 49.9072 1.18144 51.0886 2.63344 51.0886Z"
                      fill="white"
                    />
                  </svg>
                </figure>

                <div>
                  <h1 className="mb-8 text-3xl font-semibold"> Get it done </h1>
                  <p className="text-lg font-normal">
                    {" "}
                    Lorem ipsum is a placeholder text that is commonly used in
                    graphic design, publishing, and typesetting. It is an
                    industry-standard mock-up text, which is primarily.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex items-center justify-center w-[400px] max-w-full flex-col mt-24 max-md:mt-10 mx-auto mb-24">
            <div className="items-center flex flex-col px-5">
              <div className="text-cyan-900 text-2xl sm:text-4xl text-center font-semibold tracking-wider">
                Why Choose Hier?
              </div>
              <div className="text-cyan-900 text-center text-base leading-6 mt-4 ">
                Connect with unlimited quality talents to get any help.
              </div>
            </div>
            <div className="bg-orange-400  flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
          </div>
          <div className="self-center w-full container mx-auto mt-16 px-5 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex items-stretch max-md:flex-col max-md:gap-0 mx-auto">
              <div className="flex flex-col w-[41%] max-md:w-full max-md:ml-0">
                <img
                  height={100}
                  width={100}
                  alt="coose-us"
                  src={CooseUs}
                  className="aspect-[0.81] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
                />
              </div>
              <div className="flex flex-col justify-between w-[59%] ml-5 max-md:w-full max-md:ml-0">
                {/* <div className=" flex  flex-col max-md:max-w-full max-md:mt-7"> */}
                <div className="py-3">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                      <div className=" flex flex-col max-md:mt-10">
                        <div className="text-white text-xl font-semibold leading-8 bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                          04
                        </div>
                        <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                          Vast Network
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                        With a diverse community of users from different
                        backgrounds and skills, Hier offers a wide range of
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
                </div>
                <div className="py-3">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                      <div className=" flex flex-col max-md:mt-10">
                        <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                          04
                        </div>
                        <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                          Global Reach
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                        Hier connects you with people worldwide, making it easy
                        to find the help you need, regardless of your location.
                      </div>
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
                </div>
                <div className="py-3">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                      <div className=" flex flex-col max-md:mt-10">
                        <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                          04
                        </div>
                        <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                          Verified Profiles
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                        We ensure the authenticity of users profiles, so you can
                        trust the people you connect with.
                      </div>
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
                </div>
                <div className="py-3">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-[48%] max-md:w-full max-md:ml-0">
                      <div className=" flex flex-col max-md:mt-10">
                        <div className="text-white text-xl font-semibold leading-8  bg-orange-400 w-[81px] text-center max-w-full pl-7 pr-7 py-1.5 rounded-[50px]  max-md:px-5">
                          04
                        </div>
                        <div className="text-cyan-900 text-[36px] font-medium leading-[36.16px] font-clash mt-5">
                          Secure Transactions
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-cyan-900 text-base leading-8  my-auto max-md:mt-5">
                        Our secure payment system guarantees peace of mind when
                        hiring someone or offering your services.
                      </div>
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-10  w-full h-px mt-5 max-md:max-w-full" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="items-center self-center flex container mx-auto flex-col mt-32 max-md:max-w-full max-md:mt-10">
          <div className="items-center self-center flex w-full md:w-[947px] max-w-full flex-col">
            <div className="items-center self-center flex w-full md:w-[677px] max-w-full flex-col">
              <div className="items-center self-stretch flex flex-col px-5 max-md:max-w-full">
                <div className="text-cyan-900 text-2xl sm:text-4xl text-center font-semibold tracking-wider -mr-5 max-md:max-w-full">
                  See what others are getting done
                </div>{" "}
                <div className="text-cyan-900 text-center text-base leading-6 self-center md:whitespace-nowrap mt-2">
                  Connect with unlimited quality talents to get any help.
                </div>
              </div>{" "}
              <div className="bg-orange-400 self-center flex w-[205px] h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>{" "}
            <div className="justify-center items-start border border-[color:var(--Stoke,rgba(33,63,97,0.05))] md:shadow-2xl bg-white self-stretch flex gap-2 mt-10 px-5 py-2 md:rounded-[500px] border-solid max-md:max-w-full max-md:flex-wrap">
              <div
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
                  jobType === "Starting a business"
                    ? "bg-cyan-900 text-white"
                    : "text-cyan-900 bg-white"
                }`}
                onClick={(e) => setJobType("Starting a business")}
              >
                Starting a business
              </div>{" "}
              <div
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
                  jobType === "Moving"
                    ? "bg-cyan-900 text-white"
                    : "text-cyan-900 bg-white"
                }`}
                onClick={(e) => setJobType("Moving")}
              >
                Moving
              </div>{" "}
              <div
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
                  jobType === "Maintenance"
                    ? "bg-cyan-900 text-white"
                    : "text-cyan-900 bg-white"
                }`}
                onClick={(e) => setJobType("Maintenance")}
              >
                Maintenance
              </div>{" "}
              <div
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
                  jobType === "Pretties"
                    ? "bg-cyan-900 text-white"
                    : "text-cyan-900 bg-white"
                }`}
                onClick={(e) => setJobType("Pretties")}
              >
                Pretties
              </div>{" "}
              <div
                className={`text-center cursor-pointer text-base font-medium whitespace-nowrap justify-center items-center flex-1 px-4 py-2.5 rounded-[50px] ${
                  jobType === "others"
                    ? "bg-cyan-900 text-white"
                    : "text-cyan-900"
                }`}
                onClick={(e) => setJobType("others")}
              >
                others
              </div>
            </div>
          </div>
          <div className="items-start self-stretch flex grow flex-col mt-16 max-md:max-w-full max-md:mt-10">
            <div className="self-stretch px-5 max-md:max-w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {jobs
                  ?.filter((job) => job?.category === jobType)
                  .map((job, index) => (
                    <div
                      key={index}
                      className="w-full items-center self-stretch border border-[color:var(--Stoke,rgba(33,63,97,0.05))] shadow-2xl bg-white flex grow flex-col mx-auto p-6 rounded-2xl border-solid max-md:mt-5 max-md:px-5"
                    >
                      <div className="text-white text-center text-xl font-medium leading-7 self-stretch justify-center items-center bg-[#213F61] w-full p-4 rounded-xl">
                        {job?.title}
                      </div>{" "}
                      <div className="justify-between items-start self-stretch flex w-full gap-5 mt-4 max-md:justify-center">
                        <div className="text-cyan-900 text-opacity-60 text-center text-base font-medium leading-5 self-center my-auto">
                          {job?.category}
                        </div>{" "}
                        <div className="text-orange-400 text-xl font-semibold leading-7 self-stretch">
                          {`$${job?.price}`}
                        </div>{" "}
                        <div className="items-start self-center flex gap-1 my-auto">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_77_1257)">
                                <path
                                  d="M15.2682 16.4806C15.567 17.4043 14.5068 18.1691 13.7246 17.5942L10.592 15.2918C10.2396 15.0329 9.7599 15.0329 9.40755 15.2918L6.27498 17.5942C5.49268 18.1691 4.43249 17.4043 4.7313 16.4806L5.94376 12.7324C6.07664 12.3216 5.93088 11.8719 5.58227 11.6172L2.42092 9.30732C1.63985 8.73662 2.04354 7.4999 3.01089 7.4999H6.89628C7.33084 7.4999 7.71567 7.21924 7.84845 6.80545L9.04759 3.06871C9.34473 2.14278 10.6548 2.14278 10.9519 3.06871L12.1511 6.80545C12.2839 7.21924 12.6687 7.4999 13.1033 7.4999H16.9881C17.9555 7.4999 18.3592 8.73655 17.5782 9.30729L14.4172 11.6172C14.0686 11.8719 13.9229 12.3216 14.0558 12.7324L15.2682 16.4806Z"
                                  fill="#E78C3B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_77_1257">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <div className="text-cyan-900 text-opacity-60 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
                            {job?.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="bg-orange-50 self-center flex w-full flex-col mt-44 pt-24 pb-12 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="self-center w-full max-w-[1170px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[85%] max-md:w-full max-md:ml-0">
                <div className="grow mt-1 max-md:max-w-full max-md:mt-6">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[14%] max-md:w-full max-md:ml-0">
                      <img
                        width={100}
                        height={100}
                        src={Start1}
                        alt="star-icon"
                        className="aspect-square object-contain object-center w-[122px] fill-orange-400 overflow-hidden max-w-full my-auto max-md:mt-10"
                      />
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[86%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="flex w-[744px] max-w-full flex-col self-start max-md:pl-5">
                          <img
                            width={100}
                            height={100}
                            src={Talents}
                            alt="talents-icon"
                            className="aspect-[2.81] object-contain object-center w-[596px] overflow-hidden self-center max-w-full"
                          />{" "}
                          <div className="text-cyan-900 text-center text-5xl font-semibold leading-[51.84px] self-center max-w-[578px] mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                            More that 5M+ <br />
                            verified quality talents
                          </div>{" "}
                          <div className="text-cyan-900 text-center text-lg leading-8 self-center max-w-[570px] mt-4 max-md:max-w-full">
                            Circuit is flexible and affordable and offers you
                            exceptional support to achieve your career goals.
                          </div>{" "}
                          <div className="items-start  flex justify-center gap-5 mt-10  max-md:mt-10">
                            <Link
                              to={"/create-task"}
                              className="w-full flex justify-center items-center bg-orange-400 rounded-[50px] px-20 py-5 text-white text-base font-bold self-center whitespace-nowrap"
                            >
                              Post a task
                            </Link>

                            <Link
                              to={"/signin"}
                              className="w-full flex justify-center items-center px-20 py-5 rounded-[500px] max-md:px-5 bg-opacity-10 bg-orange-400 text-orange-400 text-base font-medium self-center whitespace-nowrap"
                            >
                              Become a tasker
                            </Link>
                          </div>
                        </div>{" "}
                        <img
                          width={100}
                          height={100}
                          src={Start1}
                          alt="star-icon"
                          className="aspect-square object-contain object-center w-11 fill-orange-400 overflow-hidden max-w-full grow mt-5 self-start"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  width={100}
                  height={100}
                  src={Start1}
                  alt="star-icon"
                  className="aspect-square object-contain object-center w-11 fill-orange-400 overflow-hidden max-w-full max-md:mt-5"
                />
              </div>{" "}
              <div className="flex flex-col items-stretch w-[11%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  width={100}
                  height={100}
                  src={Start1}
                  alt="star-icon"
                  className="aspect-square object-contain object-center w-[122px] fill-orange-400 overflow-hidden max-w-full my-auto max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" z-[1] flex w-full  flex-col mt-40 container mx-auto">
          <div className="items-center self-stretch flex flex-col max-lg:max-w-full">
            <div className="items-center self-center flex w-[930px] max-w-full flex-col px-5">
              <div className="text-cyan-900 text-center text-2xl sm:text-5xl font-semibold">
                Trusted by millions <br />
                of worldwide customers
              </div>{" "}
              <div className="bg-orange-400 self-center flex max-w-[250px] sm:max-w-[329px] w-full h-[5px] sm:h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>{" "}
            <div className=" mt-16 px-5 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-lg:flex-col items-center max-md:gap-0">
                <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:mt-10">
                    <img
                      width={100}
                      height={100}
                      src={Stars}
                      alt="stars icon"
                      className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                    />{" "}
                    <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                      “This was definitely my best experience with live chat
                      software. Plug and play. Intuitive. It is fast, clean,
                      amazing.”{" "}
                    </div>{" "}
                    <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
                      <span className="text-slate-900">Rated 4.5/5 -</span>
                      <span className="text-gray-500">
                        {" "}
                        from over 100 reviews
                      </span>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:mt-10">
                    <img
                      width={100}
                      height={100}
                      src={Stars}
                      alt="stars icon"
                      className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                    />{" "}
                    <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                      “Excellent simple live chat solution that has provided my
                      company with a direct way to communicate with potential
                      for customers through my website.”
                    </div>{" "}
                    <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-8">
                      <span className="text-slate-900">Rated 4.5/5 -</span>
                      <span className="text-gray-500">
                        {" "}
                        from over 100 reviews
                      </span>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:mt-10">
                    <img
                      width={100}
                      height={100}
                      src={Stars}
                      alt="stars icon"
                      className="aspect-[6] object-contain object-center w-[168px] overflow-hidden self-center max-w-full"
                    />{" "}
                    <div className="text-slate-900 text-center text-lg leading-8 self-stretch mt-7">
                      Great customer support! Easy to use, cool user interface.
                      With Chaport you will find all you need. Really recommend
                      to all use this amazine tool.”
                    </div>{" "}
                    <div className="text-gray-500 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-9">
                      <span className="text-slate-900">Rated 4.5/5 -</span>
                      <span className="text-gray-500">
                        {" "}
                        from over 100 reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="w-full items-start self-stretch flex flex-col mt-56 max-md:mt-10 ">
            <div className="items-center self-center flex max-w-[924px] w-full flex-col">
              <div className="items-center self-stretch flex flex-col px-4">
                <div className="text-cyan-900 text-center text-2xl sm:text-4xl font-semibold tracking-wider">
                  Are you ready to make your life easier?
                </div>{" "}
                <p className="text-cyan-900 text-center text-base leading-6 self-center mt-2">
                  Connect with unlimited quality talents to get any help.
                </p>
              </div>{" "}
              <div className="bg-orange-400 self-center flex max-w-[250px] sm:max-w-[329px] w-full h-[5px] sm:h-[9px] flex-col mt-4 rounded-[50px]" />
            </div>{" "}
            {/*  */}
            <div className="self-stretch mt-24  max-md:max-w-full max-md:mt-10 px-4">
              <div className="gap-8 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[48%] max-lg:w-full max-lg:ml-0">
                  <img
                    width={100}
                    height={100}
                    src={BG}
                    alt="bg icon"
                    className="aspect-[1.16] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                  />
                </div>{" "}
                <div className="flex flex-col items-stretch w-[52%] ml-5 max-lg:w-full max-lg:ml-0">
                  <div className="items-start flex flex-col pb-24 max-md:max-w-full max-md:mt-10">
                    <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                      <div className="text-cyan-900 text-2xl sm:text-4xl font-semibold leading-[32.02px] self-stretch max-md:max-w-full">
                        Join Hier Today and <br />
                        Experience the Difference
                      </div>{" "}
                      <div className="text-zinc-600 text-lg leading-8 self-stretch mt-5 max-md:max-w-full">
                        Join Hier today and connect with people from around the
                        world who are here to help you. Its as easy as 1-2-3:
                      </div>
                    </div>
                    <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full max-md:mt-10">
                      <div className="flex w-full items-center gap-3">
                        <img
                          width={100}
                          height={100}
                          src={Checked}
                          alt="checked icon"
                          className="aspect-square object-contain object-center w-4 h-4 overflow-hidden max-w-full"
                        />
                        <p className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8">
                          Sign up for free.
                        </p>
                      </div>
                      <div className="flex w-full items-center gap-3">
                        <img
                          width={100}
                          height={100}
                          src={Checked}
                          alt="checked icon"
                          className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full"
                        />
                        <div className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                          Post your task or service need.
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-3">
                        <img
                          width={100}
                          height={100}
                          src={Checked}
                          alt="checked icon"
                          className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full"
                        />
                        <div className="text-cyan-900 text-[16px] sm:text-lg font-medium leading-8 md:whitespace-nowrap grow shrink basis-auto self-start max-md:max-w-full">
                          Connect with the right person to get it done.
                        </div>
                      </div>
                      <div className="items-start self-stretch flex justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <Link
                          to={"/create-task"}
                          className="w-full flex justify-center items-center bg-orange-400 rounded-[50px] px-10 py-5 text-white text-base font-bold self-center whitespace-nowrap"
                        >
                          Post a task
                        </Link>

                        <Link
                          to={"/signin"}
                          className="w-full flex justify-center items-center px-10 py-5 rounded-[500px] max-md:px-5 bg-opacity-10 bg-orange-400 text-orange-400 text-base font-medium self-center whitespace-nowrap"
                        >
                          Become a tasker
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="flex-col my-[100px] relative flex pt-2 pb-4 max-md:max-w-full mx-4 rounded-2xl overflow-hidden">
            <img
              src={bg}
              alt="bg icon"
              className="absolute z-[-1] w-full h-full object-cover object-center inset-0"
            />
            <div className="relative flex justify-center items-center w-full  flex-col px-5 max-md:max-w-full py-24">
              {/* f */}
              <div className="text-white text-center text-2xl sm:text-4xl font-semibold rounded max-md:max-w-full max-md:mt-10">
                Don’t find your task category?
                <br />
                or interested to start with new skills to prove?
              </div>
              <div className="text-white text-center text-lg leading-8 self-center ml-0 max-w-[831px] mt-4 max-md:max-w-full">
                Subscribe here, we’ll let you know when we added them.
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full md:w-[70%] gap-6 lg:gap-0  mt-11   max-md:mt-10 ">
                <input
                  className="w-full text-cyan-900 text-base items-center bg-white rounded-xl  md:rounded-l-[500px] outline-none block py-4  md:py-6 px-6 lg:px-12 md:12"
                  placeholder="Enter your mail here.."
                  value={subscribe}
                  onChange={(e) => setSubscribe(e.target.value)}
                ></input>
                <button
                  className="text-white   font-semibold tracking-wide bg-cyan-900  rounded-full md:rounded-l-[500px] py-4  md:py-6 px-12 w-full md:w-auto"
                  onClick={() => {
                    setSubscribe("");
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
