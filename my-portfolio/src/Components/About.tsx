import { Info } from "../User";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import Particles from "./magicui/Particles";

export default function About() {
  return (
    <div
      className="flex items-center justify-around overflow-hidden px-1 h-[100vh] font-monomt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 lg-mx:p-10 pt-16"
      id="bg"
    >
      <Particles
        className="absolute -z-20 inset-0"
        quantity={1000}
        ease={80}
        vx={0.1}
        vy={0.1}
        color="#64FFDA"
        refresh
      />
      <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
        <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
          Hi, I am
        </div>
        <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
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
        <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
          {Info.bio}
        </div>
        <Button
          component="a"
          href="./Abhishek.pdf"
          download
          color="#64FFDA"
          className="!text-black !w-fit font-mono text-lg"
          variant="filled"
        >
          Check Resume
        </Button>
      </div>
      <div
        className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit "
        id="photo"
      >
        <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
          <img
            className="w-full h-full rounded-full"
            src="./public/images/abhishek_pipriye.jpg"
            alt="profile"
          />
        </NeonGradientCard>
      </div>
    </div>
  );
}
