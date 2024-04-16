import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="mx-auto mt-[100px] w-full max-w-[1250px] md:p-5">
      <div className="relative z-[2] flex flex-col items-end pl-14 pr-[250px] md:px-5">
        <div className="flex w-[34%] items-start md:w-full">
          <div className="relative z-[3] mt-2 flex rotate-[-55deg] items-start">
            <Img
              src="images/img_menu.svg"
              alt="menu_one"
              className="mt-[-20px] h-[33px]"
            />
            <Heading
              size="s"
              as="h1"
              className="text-shadow-ts mb-2.5 rotate-[16deg]"
            >
              Rukaiya
            </Heading>
          </div>
          <Img
            src="images/img_arrow_07.svg"
            alt="arrowseven_one"
            className="relative ml-[-28px] h-[183px] w-[183px]"
          />
        </div>
      </div>

      <div className=" mt-[-35px] flex items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[50%] flex-col gap-[20px] md:w-full">
          <Img
            src="images/img_frame_14.svg"
            alt="image"
            className="h-[230px] w-[200px]"
          />
          <div className="relative h-[180px] md:h-auto">
            <div className="mb-[19px] mr-[25px] h-[44px] w-[55%] md:mr-0" />
            <Text
    size="3xl"
    as="p"
    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full"
>
    <>
        I design ✍️ top
        <br />
        notch <span className="bg-amber-300">websites</span>
    </>
</Text>
          </div>
          <div className="relative h-[140px] w-[58%] pt-6 sm:pt-5">
            <Button
              color="light_blue_100"
              size="md"
              shape="round"
              className="absolute left-[0.00px] top-[20px] m-auto min-w-[291px] border-8 border-solid border-black-900_01 font-bold sm:px-5"
            >
              Download CV
            </Button>
            <Img
              src="images/img_clock.svg"
              alt="clock_one"
              className="absolute bottom-[0] right-[0] m-auto h-[66px] w-[26%] object-fill"
            />
          </div>
        </div>
        <Img
          src="images/hero-frame.png"
          alt="image_one"
          className="h-[540px] w-[500px] "
        />
      </div>
    </div>
  );
}

export default Hero;
