import React from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="w-[47%]    shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full">
      <h2 className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold ">
        {title}
      </h2>
      <ul className="mt-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex gap-3 text-textColor bs-mx:gap-2  justify-center flex-wrap"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
