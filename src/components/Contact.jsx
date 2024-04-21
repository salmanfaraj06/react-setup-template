import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function Contact() {
  return (
    <div className="flex flex-col items-end my-[100px] sm:items-center">
      <Img
        src="images/img_vector_pink_100.svg"
        alt="vector_nine"
        className="relative z-[1] h-[110px] w-[20%] sm:w-[30%] md:w-[20%]"
      />
      <div className="mt-[-63px] flex w-[80%] justify-center self-center rounded-sm border-[6px] border-solid border-black-900_01 bg-white-A700_01 p-2 shadow-sm sm:p-5 md:justify-center sm:w-full md:w-[80%]">
        <div className="mt-[29px] flex w-[100%] flex-col items-center md:w-full">
          <Text size="2xl" as="p" className="md:text-center">
            Let’s start designing your project
          </Text>
          <Text size="lg" as="p" className="mt-4 text-center">
            Want to see how to transform your brand into a unique style. send us
            a message
          </Text>
          <div className="relative mt-[51px] h-[139px] w-[38%] justify-center items-center self-center md:mr-0 sm:w-full md:w-[38%]">
            <Button
              color="light_blue_100"
              size="md"
              shape="round"
              className="m-auto max-w-[350px] !rounded-[50px] border-8 border-solid border-black-900_01 font-bold sm:px-5 "
            >
              Send us message
            </Button>
            <Img
              src="images/img_clock.svg"
              alt="clock_three"
              className="absolute bottom-[0] right-[0] m-auto h-[89px] w-[18%] sm:w-[30%] md:w-[18%] md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;