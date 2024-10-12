import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="px-16 mx-20 mt-20 font-mono my-10">
      <h1 className="text-4xl mb-5 font-bold flex justify-center text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex mt-12 flex-wrap justify-between gap-3">
        {ProjectInfo.map((project: any, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
