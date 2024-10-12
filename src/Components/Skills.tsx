import SkillCard from "./SkillCard";
import { SkillInfo } from "../User";

export default function Projects() {
  return (
    <div className="px-16 mx-20 mt-20 font-mono my-10 ">
      <h1 className="text-4xl mb-5 font-bold flex justify-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap justify-around   ">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
}
