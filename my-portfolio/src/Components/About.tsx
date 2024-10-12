import { Info } from "../User";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import profileImage from "./public/images/profile2.jpg"; // Import the profile image
import React from "react";

export default function About() {
  return (
    <div
      className="flex items-center justify-around overflow-hidden px-1 h-[100vh] font-mono"
      id="bg"
    >
      <div className="ml-20 w-3/5 flex-col flex">
        <div className="text-3xl text-primaryColor">Hi, I am</div>
        <div className="text-white text-[4.25rem] font-extrabold">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-semibold">
          I'm a&nbsp;
          <span className="text-primaryColor">
            <Typewriter
              options={{
                strings: Info.stack,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="text-textColor text-justify my-8 text-xl font-semibold w-[90%]">
          {Info.bio}
        </div>
        <Button
          component="a"
          href="./public/images/Abhishek.pdf"
          download
          color="#64FFDA"
          className="!text-black !w-fit font-mono text-lg"
          variant="filled"
          target="_blank"
        >
          Check Resume
        </Button>
      </div>
      <div
        className="h-fit flex justify-center items-center rounded-full m-14 w-fit "
        id="photo"
      >
        <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center">
          <img
            className="w-full h-full rounded-full"
            src={profileImage} // Use the imported image
            alt="profile"
          />
        </NeonGradientCard>
      </div>
    </div>
  );
}
