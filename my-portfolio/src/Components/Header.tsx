import { IconHexagonLetterA } from "@tabler/icons-react";
import SlideBar from "./SlideBar";
import React from "react";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

export const navLinks = (isSidebar = false) => {
  return links.map((link, index) => (
    <a
      key={index} // Unique key prop
      className={`text-textColor hover:text-primaryColor text-lg transition-all duration-200 ${
        isSidebar ? "flex flex-col items-center" : ""
      }`}
      href={`#${link.toLowerCase()}`} // Use individual link for href
    >
      <span className="mr-2 text-textColor">0{index + 1}.</span> {link}
    </a>
  ));
};

export default function Header() {
  return (
    <nav className="flex items-center justify-between text-primaryColor dm-mono-regular bg-bgColor p-4 px-10">
      <IconHexagonLetterA size={60} color="#3DC2EC" stroke={1.25} />
      <div className="hidden md:flex gap-8">{navLinks()}</div>
      <SlideBar />
    </nav>
  );
}
