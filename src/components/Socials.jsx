import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/rukinish" },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/rukaiyanishfan/",
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    link: "https://www.behance.net/rukinish",
  },
];

const Socials = () => (
  <div className="flex items-center my-7 space-x-8">
    <IconContext.Provider value={{ size: "2rem" }}>
      {socialLinks.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {social.icon}
        </a>
      ))}
    </IconContext.Provider>
  </div>
);

export default Socials;
