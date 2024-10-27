import { IconHexagonLetterA } from "@tabler/icons-react";
import SideBar from "./SlideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];
const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => (
    <a
      key={index}
      onClick={handleClick}
      className={`${
        col ? "flex flex-col items-center" : ""
      } text-textColor text-lg font-mono hover:text-primaryColor`}
      href={`#${link}`} // Ensure this matches the IDs in your sections
    >
      <span className="text-primaryColor">0{index + 1}. </span>
      {link}
    </a>
  ));
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    setShadow(window.scrollY > 70);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`m-[-10px] flex transition-transform duration-500 fixed w-full z-5 bg-bgColor h-16 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 ${
        show ? "top-0" : "-top-20"
      }`}
    >
      <IconHexagonLetterA
        className="z-10"
        size={isMobile ? 45 : 60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="bs:flex gap-5 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
