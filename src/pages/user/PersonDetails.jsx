import React from "react";
import PersonContainer from "@/components/users/person_details/PersonContainer";
import banner from "../../assets/bg-pdetails.png";
import About from "@/components/users/person_details/About";
import Skills from "@/components/users/person_details/Skills";
import Reviews from "@/components/users/person_details/Reviews";
1;
const PersonDetails = () => {
  return (
    <div>
      <div className="w-full h-full max-w-[1520px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 2xl:px-0">
        {/* banner part */}
        <div className=" py-[15px] md:pt-[30px] md:pb-[20px]">
          <img
            src={banner}
            alt="banner"
            width={2100}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <PersonContainer />
        <About />
        <Skills />
        <Reviews />
        {/* <About />
        <Skills />
        <Reviews /> */}
      </div>
    </div>
  );
};

export default PersonDetails;
