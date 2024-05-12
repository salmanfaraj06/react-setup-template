import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function Contact() {
  return (
    <div className="flex flex-col items-end my-[100px] sm:items-center" id="contact">
      <Img
        src="images/img_vector_pink_100.svg"
        alt="vector_nine"
        className="z-[1] h-[110px] w-[20%] sm:w-[30%] md:w-[20%]"
      />
      <div className="mt-[-63px] flex w-[80%] justify-center self-center rounded-sm border-[6px] border-solid border-black-900_01 bg-white-A700_01 p-2 shadow-sm sm:p-5 md:justify-center">
        <div className="mt-[29px] flex w-[100%] flex-col items-center md:w-full">
          <Text size="2xl" as="p" className="md:text-center">
            Let’s start designing your project
          </Text>
          <Text size="lg" as="p" className="mt-4 text-center">
            Want to see how to transform your brand into a unique style. send us
            a message
          </Text>
          <div className="flex justify-center items-center my-10">
            <Button
              color="light_blue_100"
              size="md"
              shape="round"
              className=" border-8 border-solid border-black-900_01 font-bold md:h-[70px] md:px-[50px] md:text-[20px] sm:h-[60px] sm:px-[10px] sm:text-[16px] "

            >
              Send Us Message
            </Button>
            <Img
              src="images/img_clock.svg"
              alt="clock"
              className="ml-4 mt-10 h-16 w-16 sm:hidden md:w-14 md:h-14 "
            />
          
        </div>
      </div>
    </div>
    </div >
  );
}

export default Contact;