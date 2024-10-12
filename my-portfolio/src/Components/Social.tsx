import { SocialInfo } from "../User";
import React from "react";

export default function Social() {
  const socialLinks = SocialInfo; // Extract social information

  const socialIcons = socialLinks.map((socialLink, index) => {
    const IconComponent = socialLink.icon; // Extract icon component
    return (
      <a
        key={index}
        href={socialLink.link}
        target="_blank"
        className="font-mono text-lg -rotate-90 hover:text-primaryColor hover:-translate-x-1 transition-transform duration-300 ease-in-out"
        rel="noopener noreferrer"
        aria-label={`Visit ${socialLink.link}`} // Add aria-label for accessibility
      >
        <IconComponent size={30} stroke={1.5} /> {/* Render the icon */}
      </a>
    );
  });

  return (
    <div className="flex text-textColor items-center gap-5 fixed bottom-40 -left-44 rotate-90">
      {socialIcons}
      <hr className="border-2 bg-textColor rounded-full border-textColor w-40" />
    </div>
  );
}
