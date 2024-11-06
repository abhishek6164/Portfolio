import { useState } from "react";

interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  link: string;
  github: string;
}

export default function ProjectCard({
  title,
  desc,
  // image,
  link,
  github,
}: ProjectCardProps) {
  const [showMore, setShowMore] = useState(false);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(" ")}...`
      : text;
  };

  return (
    <div className=" p-4 rounded-3xl bg-gray-800 text-white w-full sm:w-[45%] md:w-[30%] my-4 border border-primaryColor hover:scale-[1.02] mb-5 hover:shadow-[0_0_10px_#64FFDA80]">
      <img
        src="images/abhishek_pipriye.jpg"
        alt={title}
        className="w-full h-[200px] object-cover rounded-3xl"
      />

      <h2 className="text-2xl font-bold mt-4">{title}</h2>

      <p className="mt-2 text-textColor">
        {showMore ? desc : truncateText(desc, 20)}{" "}
        <button
          className="text-primaryColor  mt-2 underline"
          onClick={() => setShowMore((prev) => !prev)}
          aria-label={
            showMore
              ? "Show less of project description"
              : "Show more of project description"
          }
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </p>

      <div className="flex justify-around mt-4 gap-6">
        <a
          href={link}
          className="text-primaryColor inline-block"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${title}`}
        >
          Live Demo
        </a>
        <a
          href={github}
          className="text-primaryColor inline-block"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View GitHub repository of ${title}`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
