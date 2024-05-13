import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/your-github" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/your-linkedin" },
  { name: "Behance", icon: <FaBehance />, link: "https://www.behance.net/your-behance" },
];

const Socials = () => (
  <div className="flex items-center my-7 space-x-4">
    <IconContext.Provider value={{ size: "2rem" }}>
      {socialLinks.map((social, index) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
          {social.icon}
        </a>
      ))}
    </IconContext.Provider>
  </div>
);

export default Socials;
