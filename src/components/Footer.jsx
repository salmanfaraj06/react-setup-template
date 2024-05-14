import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-[53px] self-stretch md:gap-[62px] sm:gap-[41px]">
      <div className="h-[6px] w-full self-stretch bg-black-900_01" />
      <div className="mx-auto flex w-full max-w-[1253px] items-center justify-between gap-5 md:flex-col md:p-5">
        <div className="flex">
          <div className="flex items-center gap-[15px]">
            <Img
              src="images/Vector.png"
              alt="close_five"
              className="h-[49px] w-[48px]"
            />
            <Text size="xl" as="p" className="!text-black-900">
              Ruki
            </Text>
          </div>
        </div>
        <Text size="lg" as="p" className="text-center !font-medium">
          Portfolio 2024
        </Text>
        <div className="flex justify-between md:justify-center gap-5 md:w-full">
          <Socials/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
