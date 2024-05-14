import React from "react";
import { Link } from "react-router-dom";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";
import LazyLoad from "react-lazyload";

function HeroMain() {
  return (
    <div className="mx-auto w-full text-center">
      <LazyLoad height={200} offset={100}>
        <Img
          src="images/img_frame_14.svg"
          alt="image"
          className="mx-auto h-[200px] w-[160px] md:w-[110px] sm:h-[100px] sm:w-[80px]"
        />
      </LazyLoad>
      <Text
        size="3xl"
        as="p"
        className="mb-4 text-white sm:px-5 text-center md:text-[48px] font-bold sm:text-[30px]"
      >
        Hi there! My name is{" "}
        <div className="flex-row items-center">
          <span className="whitespace-nowrap">
            <span className="relative inline-block">
              <span className="bg-amber-300 absolute top-12 md:top-7 sm:top-5 h-1/3 w-full"></span>
              <span className="relative z-10 bg-white">Rukaiya</span>
            </span>
          </span>{" "}
          <span className="md:ml-2">Nishfan</span>
        </div>
      </Text>

      <Text
        size="md"
        as="p"
        className="mb-8 text-white md:text-[24px] sm:text-[17px] sm:px-5"
      >
        Turning great designs into functional realities,
        <br />
        one pixel (and line of code) at a time.
      </Text>
      <div className="flex justify-center items-center">
        <Button
          color="light_blue_100"
          size="md"
          shape="round"
          className="w-[290px] border-8 border-solid sm:border-4 ml-7 border-black-900_01 font-bold md:h-[70px] md:px-[10px] md:text-[20px] md:w-[180px] sm:h-[60px]  sm:text-[16px]"
        >
          <Link to="/about">Read More</Link>
        </Button>
        <LazyLoad height={100} offset={100}>
          <Img
            src="images/img_clock.svg"
            alt="clock"
            className="mt-10 h-16 w-16 sm:w-10 sm:h-10 md:w-14 md:h-14"
          />
        </LazyLoad>
      </div>
    </div>
  );
}

export default HeroMain;
