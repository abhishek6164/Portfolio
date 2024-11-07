import { SocialInfo } from "../User";

const Social = () => {
  const socialLinks = SocialInfo; // Extract social information

  const socialIcons = socialLinks.map((socialLink, index) => {
    const IconComponent = socialLink.icon; // Extract icon component
    return (
      <a
        key={index}
        href={socialLink.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${socialLink.link}`} // Add aria-label for accessibility
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-1 transition-transform duration-300 ease-in-out"
      >
        <div data-aos="fade-up-left" data-aos-duration="800">
          <IconComponent size={25} stroke={1.5} className="-rotate-90" />{" "}
          {/* Render the icon */}
        </div>
      </a>
    );
  });

  return (
    <div className="flex bs-mx:hidden text-textColor items-center gap-8 fixed bottom-32 -left-48 rotate-90">
      {socialIcons}
      <hr className="border w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Social;
