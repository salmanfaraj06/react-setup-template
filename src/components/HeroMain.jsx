import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function HeroMain() {
  return (
    <div className="mx-auto w-full text-center">
      <Img
        src="images/img_frame_14.svg"
        alt="image"
        className="mx-auto h-[200px] w-[160px] md:w-[110px] sm:h-[100px] sm:w-[80px]"
      />
      <Text size="3xl" as="p" className="mb-4 text-white sm:px-5 text-center md:text-[48px] font-bold sm:text-[36px]">
        Hi there! My name is{" "}
        <div className="flex-row items-center">
          <span className="whitespace-nowrap">
            <span className="relative inline-block">
              {/* Background color applied to only a portion of the text */}
              <span className="bg-amber-300 absolute top-12 md:top-7 h-1/3 w-full"></span>
              {/* Original text with reduced opacity to allow background color to show through */}
              <span className="relative z-10 bg-white">
                {/* Original text */}Rukaiya
              </span>
            </span>
          </span>{" "}
          <span className="md:ml-2">Nishfan</span>
        </div>
      </Text>

      <Text size="md" as="p" className="mb-8 text-white md:text-[24px] sm:text-[20px] sm:px-5">
        Turning great designs into functional realities,
        <br />
        one pixel (and line of code) at a time.
      </Text>
      <div className="flex justify-center items-center">
        <Button
          color="light_blue_100"
          size="md"
          shape="round"
          className=" w-[291px] border-8 border-solid border-black-900_01 font-bold md:h-[70px] md:px-[10px] md:text-[20px] md:w-[180px] sm:h-[60px] sm:px-[10px] sm:text-[16px] "
        >
          Read More
        </Button>
        <Img
          src="images/img_clock.svg"
          alt="clock"
          className="mt-10 h-16 w-16 sm:w-10 sm:h-10 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
}

export default HeroMain;
