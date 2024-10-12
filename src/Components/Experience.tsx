import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";
import React from "react";

// Define the type for an individual experience item
type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills?: string[]; // skills can be optional
};

type TimelineItemProps = {
  items: ExperienceItem[];
};

// TimelineItem as a component receiving items as props
const TimelineItem = ({ items }: TimelineItemProps) => {
  return (
    <>
      {items.map((item, index) => (
        <Timeline.Item
          key={index}
          bullet={<IconBriefcaseFilled className="text-bgColor" size={20} />}
        >
          <div className="border mt-12 border-primaryColor p-5 rounded-2xl transition-transform transition-shadow duration-300 hover:scale-[1.02] hover:shadow-[0_0_10px_#64FFDA80] ">
            <div className="flex gap-4 items-center">
              <img
                src={`/images/${item.company.toLowerCase()}.jpeg`} // Ensure the image path is correct
                className="rounded-lg w-16"
                alt={item.company}
                onError={(e) =>
                  (e.currentTarget.src = "/images/placeholder.jpg")
                } // Fallback image
              />
              <div className="flex flex-col">
                <div className="text-white text-2xl font-semi">{item.role}</div>
                <div className="text-textColor text-xl font-semi">
                  {item.company} &#x2022; {item.date}
                </div>
              </div>
            </div>
            <div className="text-textColor text-xl font-semi mt-5">
              {item.desc}
            </div>
            {item.skills && item.skills.length > 0 && (
              <div className="text-textColor text-xl font-semi mt-5">
                <span className="text-white">Skills:</span>{" "}
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="ml-2">
                    &#x2022; {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Timeline.Item>
      ))}
    </>
  );
};

export default function Experience() {
  return (
    <div className="px-16 mx-20 font-mono my-10 mt-20">
      <h1 className="text-4xl mb-5 font-bold flex justify-center text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Experience
      </h1>
      <div className="text-primaryColor">
        <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={5}>
          {/* Pass ExperienceInfo to TimelineItem */}
          <TimelineItem items={ExperienceInfo} />
        </Timeline>
      </div>
    </div>
  );
}
