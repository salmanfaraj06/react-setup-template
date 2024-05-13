import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <div className="h-[6px] w-full self-stretch bg-black-900_01" />
      <div className="flex items-center justify-center mt-12">
        <Img
          src="images/Vector.png"
          alt="close_five"
          className="h-[49px] w-[48px]"
        />
        <Text size="2xl" as="p" className="text-black-900">
          ukaiya
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
