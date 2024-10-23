import { Info } from "../User";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import Particles from "./magicui/Particles";

export default function About() {
  return (
    <div
      className="flex relative justify-around overflow-hidden h-[90%] py-10 px-10 font-mono"
      id="bg"
    >
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color="#64ffda"
        refresh
      />
      <div className="ml-10 w-3/5 flex flex-col ">
        <div className="text-3xl text-primaryColor lg:text-2xl bs:text-2xl">
          Hi, I am
        </div>
        <div className="text-white text-[4.25rem] font-extrabold lg:text-4xl bs:text-3xl">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-semibold lg:text-3xl bs:text-2xl">
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
        <div className="text-textColor text-xl my-8 text-justify font-semibold w-[90%] lg:text-lg bs:text-base md:w-full">
          {Info.bio}
        </div>
        <div className="flex gap-3">
          <Button
            component="a"
            href="./images/Abhishek.pdf"
            download
            color="#64FFDA"
            className="!text-black !w-fit font-mono text-lg"
            variant="filled"
            target="_blank"
          >
            Check Resume
          </Button>
        </div>
      </div>

      {/* photo */}
      <div
        className="h-fit flex justify-center items-center rounded-full m-14 w-fit"
        id="photo"
      >
        <NeonGradientCard className="w-[325px] h-[325px] lg:w-[275px] lg:h-[275px] bs:w-[225px] bs:h-[225px]">
          <img
            className="w-full h-full rounded-full"
            src="./images/abhishek_pipriye.jpg"
            alt="profile"
          />
        </NeonGradientCard>
      </div>
    </div>
  );
}
