import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

function Contact() {
  return (
    <div className="flex flex-col items-end">
      <Img
        src="images/img_vector_pink_100.svg"
        alt="vector_nine"
        className="relative z-[4] h-[127px] w-[12%]"
      />
      <div className="relative mt-[-63px] flex w-full justify-center self-center rounded-sm border-[6px] border-solid border-black-900_01 bg-white-A700_01 p-9 shadow-sm sm:p-5">
        <div className="mt-[29px] flex w-[72%] flex-col items-start md:w-full">
          <Text size="2xl" as="p">
            Let’s start designing your project
          </Text>
          <Text size="lg" as="p" className="mt-4 text-center">
            Want to see how to transform your brand into a unique style. sent us
            a message
          </Text>
          <div className="relative mr-[174px] mt-[51px] h-[139px] w-[64%] self-end md:mr-0">
            <Button
              color="light_blue_100"
              size="md"
              shape="round"
              className="absolute left-[0.00px] top-[0.00px] m-auto min-w-[352px] rotate-[-1deg] !rounded-[50px] border-8 border-solid border-black-900_01 font-bold sm:px-5"
            >
              Send us message
            </Button>
            <Img
              src="images/img_clock.svg"
              alt="clock_three"
              className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[89px] w-[18%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
