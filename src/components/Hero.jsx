import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";
import Socials from "./Socials";
import Rukaiya_CV from "../assets/rukinishCV.pdf";

function Hero() {
  return (
    <div className="mx-auto my-12 w-full max-w-[1250px] flex flex-row md:flex-col gap-x-4">
      {/* Left Column */}
      <div className="flex-1 pr-7 md:pr-2 md:pl-2 mx-auto md:mx-0">
        <div className="relative flex flex-col items-start md:items-center">
          <div className="relative flex rotate-[-55deg] mt-12 items-start md:hidden">
            <Img
              src="images/img_menu.svg"
              alt="menu_one"
              className="mt-[-20px] h-[33px]"
            />
            <Heading size="s" as="h1" className="text-shadow-ts rotate-[16deg]">
              Rukaiya
            </Heading>
          </div>
          <Img
            src="images/img_arrow_07.svg"
            alt="arrowseven_one"
            className="relative h-[165px] w-[183px] -mb-10 md:hidden"
          />
          <Img
            src="images/hero-frame.png"
            alt="image_one"
            className=" h-[540px] w-[500px]"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 mx-auto md:mx-7">
        <Img src="images/pink.png" alt="frame_one" className="md:hidden" />
        <Text size="2xl" className="my-4 md:text-4xl sm:text-2xl">
          <span className="whitespace-nowrap">Hello! I'm </span>
          <span className="relative inline-block z-0">
            Rukaiya
            <span className="bg-amber-300 absolute inset-0 top-8 md:top-7 sm:top-4 h-1/3 w-full z-[-1]"></span>
          </span>
        </Text>

        <Text size="xs" className="mb-3 text-justify md:text-xl sm:text-lg">
          A passionate UI/UX designer with a knack for creating intuitive and
          visually appealing digital experiences. With a keen eye for detail and
          a love for problem-solving, I thrive on turning complex concepts into
          simple and elegant designs that delight users.
        </Text>
        <Text size="xs" className="mb-3 text-justify md:text-xl sm:text-lg">
          My journey into the world of design began Since then, I've been on a
          mission to continuously hone my craft and stay updated with the latest
          design trends and technologies.
        </Text>
        <Socials />
        <div className="flex justify-start items-center my-10">
          <Button
            color="light_blue_100"
            size="md"
            shape="round"
            className="border-8 sm:border-4 border-solid border-black-900_01 font-bold md:h-[70px] md:px-[50px] md:text-[20px] sm:h-[50px] sm:px-[10px] sm:text-[16px]"
          >
            <a href={Rukaiya_CV} download="rukaiya-resume.pdf">
              Download CV
            </a>{" "}
          </Button>
          <Img
            src="images/img_clock.svg"
            alt="clock"
            className="mt-10 h-16 w-16 sm:hidden md:w-14 md:h-14 "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
