import SkillCard from "./SkillCard";
import { SkillInfo } from "../User";
import React from "react";

interface Skill {
  title: string;
  skills: string[];
}

export default function Projects() {
  return (
    <div className="px-16 mx-20 mt-20 font-mono my-10">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {SkillInfo.map((skill: Skill, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
}
