import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

function Skills() {
  return (
    <div className="mt-6 flex flex-col items-start self-stretch">
      <Img
        src="images/img_vector.png"
        alt="vector_three"
        className="h-[127px] w-[6%] object-cover"
      />
      <div className="relative mt-[-18px] flex justify-center self-stretch bg-black-900_01 py-[34px] sm:py-5">
        <div className="mx-auto flex w-full max-w-[1238px] justify-between gap-5 self-end md:flex-col md:p-5">
          <Text size="2xl" as="p" className="self-end !text-white-A700_01">
            Figma
          </Text>
          <div className="flex w-[80%] flex-wrap justify-between gap-5 self-start md:w-full">
            <Text size="2xl" as="p" className="!text-white-A700_01">
              Framer
            </Text>
            <Text size="2xl" as="p" className="!text-white-A700_01">
              Webflow
            </Text>
            <Text size="2xl" as="p" className="!text-white-A700_01">
              Notion
            </Text>
            <Text size="2xl" as="p" className="!text-white-A700_01">
              Lottie
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
