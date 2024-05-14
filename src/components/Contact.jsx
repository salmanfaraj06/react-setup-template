import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function Contact() {
  return (
    <div
      className="flex flex-col items-end my-[100px] sm:items-end mx-auto"
    >
      <Img
        src="images/img_vector_pink_100.svg"
        alt="vector_nine"
        className="z-[1] h-[110px] w-[20%] sm:w-[30%] md:w-[20%] mr-12"
      />
      <div className="mt-[-63px] flex w-[75%] justify-center self-center rounded-sm border-[6px] border-solid border-black-900_01 bg-white-A700_01 p-2 shadow-sm sm:p-4 md:justify-center">
        <div className="mt-[29px] flex w-[90%] flex-col items-center md:w-full" id="contact">
          <Text
            size="2xl"
            as="p"
            className="md:text-center md:text-4xl sm:text-md font-medium"
          >
            Let’s connect
          </Text>
          <Text
            size="lg"
            as="p"
            className="mt-4 px-3 text-center font-medium sm:text-xl md:text-2xl "
          >
            Thank you for your interest in my work. If you have any questions or
            comments, please contact{" "}
            <span className=" font-extrabold italic">me</span>.
          </Text>

          <div className="flex justify-center items-center my-10 sm:my-5">
          <a href="mailto:rukaiyanishfan@gmail.com">
            <Button
              color="light_blue_100"
              size="md"
              shape="round"
              className=" border-8 md:border-4 border-solid ml-12 sm:ml-0 border-black-900_01 font-bold md:h-[70px] md:px-[50px] md:text-[20px] sm:h-[40px] sm:px-[10px] sm:text-[14px] "
            >
              Send a Message
            </Button>
            </a>
            <Img
              src="images/img_clock.svg"
              alt="clock"
              className="mt-10 h-16 w-16 sm:hidden md:w-14 md:h-14 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
