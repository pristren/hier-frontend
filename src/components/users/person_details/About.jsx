import React from "react";

const About = () => {
  return (
    <div className="w-full h-full rounded-[24px] p-5 md:p-7 bg-[#F4F8FD]">
      <h1 className="text-primary text-xl md:text-2xl font-semibold font-clash pb-4 md:pb-7 border-b ">
        About
      </h1>
      <div className="w-full h-full pt-4 md:pt-7 font-sans text-primary text-base leading-7">
        <p className="leading-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &apos;lorem ipsum&apos; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
        <p className="mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here..{" "}
          <span className="text-secondary font-medium cursor-pointer">
            Read more
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
