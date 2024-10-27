import { Timeline, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";
import React from "react";

// Define the type for an individual experience item
type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills?: string[];
};

const Experience = () => {
  const size = useMatches({ xs: 15, md: 20 });
  const dot = useMatches({ xs: 25, md: 30 });

  const renderTimelineItems = (items: ExperienceItem[]) => {
    return items.map((item, index) => (
      <Timeline.Item
        key={index}
        bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />}
      >
        <div className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img
              src={`images/${item.company.toLowerCase()}.jpeg`}
              className="rounded-lg w-16"
              alt={item.company}
              onError={(e) => (e.currentTarget.src = "images/placeholder.jpg")}
            />
            <div className="flex flex-col">
              <div className="text-white text-2xl font-semibold">
                {item.role}
              </div>
              <div className="text-lg font-semibold text-textColor">
                {item.company} &#x2022; {item.date}
              </div>
            </div>
          </div>
          <div className="text-textColor leading-6 text-justify">
            {item.desc}
          </div>
          {item.skills && item.skills.length > 0 && (
            <div className="text-lg font-medium text-textColor flex gap-1">
              <div className="font-semibold text-white">Skills:</div>
              <div className="flex gap-1 flex-wrap">
                {item.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>&#x2022; {skill}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Timeline.Item>
    ));
  };

  return (
    <div
      className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
      id="Experience"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Experience
      </h1>
      <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
        {renderTimelineItems(ExperienceInfo)}
        <Timeline.Item
          bullet={<IconBriefcaseFilled className="!text-bgColor" size={size} />}
        />
      </Timeline>
    </div>
  );
};

export default Experience;
