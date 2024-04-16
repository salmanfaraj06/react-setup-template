import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

function Navbar() {
  return (
    <header className="flex  self-stretch ">
      <div className="mx-auto mb-[90px] flex w-full max-w-[1000px] justify-center ">
        <div className="mt-[51px] flex w-[80%] items-center justify-center md:w-full md:flex-col">
          <div className="relative h-[107px] flex-1 md:w-full md:flex-none md:self-stretch">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full border-[5px] border-solid border-black-900_01 bg-white-A700_01 shadow-md">
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <div className="flex items-center gap-[15px]">
                  <Img
                    src="images/img_close.svg"
                    alt="close_one"
                    className="h-[49px] w-[48px]"
                  />
                  <Text size="xl" as="p" className="!text-black-900">
                    Ruki
                  </Text>
                </div>
                <div className="flex w-[53%] items-center justify-center gap-3.5 sm:w-full">
                  <div className="h-[89px] w-[4px] bg-black-900_01" />
                  <div className="relative h-[90px] flex-1">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-between gap-5">
                      <Text as="p" className="self-end !text-black-900">
                        About //
                      </Text>
                      <div className="relative h-[31px] w-[29%] self-start md:h-auto">
                        <div className="mb-1.5 ml-0.5 h-[10px] w-[85%] md:ml-0" />
                        <Text
                          as="p"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !text-black-900"
                        >
                          Portfolio
                        </Text>
                      </div>
                      <Text as="p" className="self-start !text-black-900">
                        Hire Me
                      </Text>
                    </div>
                    <div className="absolute bottom-0 right-[26%] top-0 my-auto flex h-max w-[40%] justify-between gap-5">
                      <div className="h-[89px] w-[4px] bg-black-900_01" />
                      <div className="h-[89px] w-[4px] bg-black-900_01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
            <div className="absolute left-[0.00px] top-[0.00px] m-auto h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
          </div>
          <div className="relative z-[1] ml-[-3px] flex w-[2%] flex-col gap-[76px] md:ml-0 md:w-full md:gap-[57px] sm:gap-[38px]">
            <div className="h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
            <div className="h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
