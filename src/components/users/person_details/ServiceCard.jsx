import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, price, image, category, rating } = service;
  return (
    <div
      className="w-full  p-4 md:p-6 rounded-[16px] border border-[#213f610d]"
      style={{ boxShadow: "15px 43px 50px 15px rgba(0, 0, 0, 0.03)" }}
    >
      <Image src={image} alt="services" width={600} height={500} />
      <div className="w-full p-4 text-center bg-primary text-white rounded-[10px] mt-4">
        <p className="text-lg md:text-xl font-clash font-medium">{title}</p>
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <p className="text-[#213F6199] font-clash font-medium text-base">
          {category}
        </p>
        <p className="text-[#E78C3B] font-clash font-semibold text-lg md:text-xl">
          ${price}
        </p>
        <div className="w-fit flex items-center gap-0.5">
          <Image
            src={"/icons/star.svg"}
            alt="star icon"
            width={20}
            height={20}
          />
          <p className="text-[#213F6199] font-clash font-medium text-base">
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
