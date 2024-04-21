import React, { useState, useEffect } from "react";
import { Text } from "./Text";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="mx-auto m-10 max-w-[1000px] border-[5px] border-solid border-black-900_01 bg-white-A700_01 shadow-md">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-5 mr-10">
          <img
            src="images/Vector.png"
            alt="close_one"
            className="h-10 w-10"
          />
          <Text size="xl" className="text-black-900">
            Ruki
          </Text>
        </div>

        <div className="flex items-center gap-8">
          <div className="border-2 border-black-900_01 h-12"></div>
          <Link to="/about">
            <Text
              className={`text-black-900 ${
                activeLink === "/about" ? "bg-amber-300" : ""
              }`}
            >
              About
            </Text>
          </Link>
          <div className="border-2 border-black-900_01 h-12"></div>
          <Link to="/">
            <Text
              className={`text-black-900 ${
                activeLink === "/" ? "bg-amber-300" : ""
              }`}
            >
              Work
            </Text>
          </Link>
          <div className="border-2 border-black-900_01 h-12"></div>
          <Link to="/contact">
            <Text
              className={`text-black-900 ${
                activeLink === "/contact" ? "bg-amber-300" : ""
              }`}
            >
              Contact Me
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
