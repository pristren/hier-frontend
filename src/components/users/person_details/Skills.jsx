import React from "react";

const skills = [
  {
    id: 1,
    title: "Education",
    skills: ["Graduated"],
  },
  {
    id: 2,
    title: "Specialties",
    skills: ["UX design", "UI design", "Web design"],
  },
  {
    id: 3,
    title: "Work",
    skills: ["Website design", "Mobile app design", "Graphic design"],
  },
  {
    id: 4,
    title: "Languages",
    skills: ["English", "Spanish", "French"],
  },
];

const Skills = () => {
  return (
    <div className="w-full ">
      <h1 className="text-secondary font-semibold font-clash text-2xl pb-4 md:pb-6 border-b border-[#213f610d] ">
        Skills
      </h1>

      <div className="mt-5 md:mt-7 w-full space-y-4">
        {skills?.map((skill) => (
          <div
            className="w-full h-fit bg-[#F4F8FD] rounded-[24px] p-4 md:p-6 lg:p-7"
            key={skill?.id}
          >
            <h1 className="text-lg md:text-xl font-clash font-medium text-secondary">
              {skill?.title}:
            </h1>
            <div className="mt-[23px] w-full flex items-center gap-3 flex-wrap">
              {skill?.skills?.map((skl, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 md:py-2 md:px-4 w-fit rounded-full bg-white text-primary font-medium font-sans cursor-pointer"
                >
                  {skl}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
