import React, { useState, useEffect } from "react";
import { Text } from "./Text";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-4 md:mx-auto border-[5px] w-[700px] md:w-[200px] mx-auto border-solid border-black-900_01 bg-white-A700_01 shadow-md">
      <div className="flex flex-row md:flex-col items-center justify-between p-5 md:p-3 ">
        <div className="md:flex items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-3">
            <img
              src="images/Vector.png"
              alt="close_one"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <Text size="xl" className="text-black-900">
              Ruki
            </Text>
          </div>

          {/* Hamburger Icon */}
          <div className="hidden md:block" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Menu Links */}
        <div
          className={`flex items-center gap-8 md:gap-3 mt-0 md:mt-3 md:${
            isMenuOpen ? "hidden" : "block"
          }`}
        >
          <Link to="/about">
            <Text
              className={`text-black-900 ${
                activeLink === "/about" ? "bg-amber-300" : ""
              }`}
            >
              About
            </Text>
          </Link>
          <Link to="/">
            <Text
              className={`text-black-900 ${
                activeLink === "/" ? "bg-amber-300" : ""
              }`}
            >
              Work
            </Text>
          </Link>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="bg-amber-300"
            className={`text-black-900 cursor-pointer ${
              activeLink === "/contact" ? "bg-amber-300" : ""
            }`}
          >
            <Text
              className={`text-black-900 ${
                activeLink === "/contact" ? "bg-amber-300" : ""
              }`}
            >
              Contact Me
            </Text>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
