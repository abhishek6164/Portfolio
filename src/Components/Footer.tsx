import { Info, SocialInfo } from "../User";

export default function Footer() {
  const socialLinks = SocialInfo; // Use socialLinks only here

  const socialIcons = socialLinks.map((socialLink, index) => {
    const IconComponent = socialLink.icon; // Extract icon component
    return (
      <a
        key={index}
        href={socialLink.link}
        target="_blank"
        className="font-mono text-lg -rotate-90 hover:text-primaryColor hover:scale-105 transition-transform duration-300 ease-in-out"
        rel="noopener noreferrer"
      >
        <IconComponent size={30} stroke={1.5} /> {/* Render the icon */}
      </a>
    );
  });

  return (
    <div className="px-16 mx-20 mt-20 font-mono my-10">
      <h1 className="text-4xl mb-5 font-bold flex justify-center text-primaryColor">
        {Info.name}
      </h1>
      <div className="hidden md:flex text-textColor gap-8 sm:gap-6">
        {socialIcons}
      </div>
      <div className="flex flex-wrap justify-around text-xl">
        <p className="text-textColor">
          Copyright © 2024 {Info.name} | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
