import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function HeroMain() {
  return (
    <div className="mx-auto mt-[100px] w-full max-w-[80%] text-center">
      <Img
        src="images/img_frame_14.svg"
        alt="image"
        className="mx-auto mt-[-35px] h-[230px] w-[200px]"
      />
      <Text size="3xl" as="p" className="mb-4 text-white">
        Hi there! My name is{" "}
        <span className="whitespace-nowrap">
          <span className="bg-amber-300">Rukaiya</span> 
        </span>
        {" "}Nishfan
      </Text>
      <Text size="md" as="p" className="mb-8 text-white">
        Turning great designs into functional realities,
        <br />
        one pixel (and line of code) at a time.
      </Text>
      <div className="flex justify-center items-center">
        <Button
          color="light_blue_100"
          size="md"
          shape="round"
          className=" w-[291px] border-8 border-solid border-black-900_01 font-bold md:h-[70px] md:px-[10px] md:text-[20px] sm:h-[60px] sm:px-[10px] sm:text-[16px] "
        >
          Read More
        </Button>
        <Img
          src="images/img_clock.svg"
          alt="clock"
          className="ml-4 mt-10 h-16 w-16 sm:w-10 sm:h-10 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
}

export default HeroMain;
