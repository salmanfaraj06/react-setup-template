import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

function Navbar() {
  return (
    <>
    
      <div className="mx-auto mb-[90px] flex w-full max-w-[1000px]  ">
        <div className="mt-[50px] flex items-center w-full md:mx-8">
          <div className="relative h-[100px] flex-1 md:w-full md:flex-none ">
            <div className="border-[5px] border-solid border-black-900_01 bg-white-A700_01 shadow-md">
              <div className="flex items-center justify-between sm:flex-col">
                <div className="flex items-center m-3 gap-[10px]">
                  <Img
                    src="images/img_close.svg"
                    alt="close_one"
                    className="h-[49px] w-[48px]"
                  />
                  <Text size="xl" as="p" className="text-black-900">
                    Ruki
                  </Text>
                </div>
                <div className="flex w-[50%] sm:w-full m-auto">
                  <div className="h-[89px] w-[4px] bg-black-900_01 " />
                  <div className="relative h-[90px] flex-1 j">
                    <div className="self-center absolute bottom-0 left-0 right-0 top-0 ml-10 flex h-max w-full items-center justify-between ">
                      <Text as="p" className="self-center text-black-900">
                        About //
                      </Text>
                      <div className="relative h-[31px] w-[29%] self-center md:h-auto">
                        <div className="mb-1.5 ml-0.5 h-[10px] w-[85%] md:ml-0" />
                        <Text
                          as="p"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max text-black-900"
                        >
                          Portfolio
                        </Text>
                      </div>
                      <Text as="p" className=" text-black-900">
                        Contact Me
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
            <div className="absolute bottom-[0] left-[0] m-auto h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
            <div className="absolute left-[0] top-[0] m-auto h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
          </div>
          <div className="relative z-[1] ml-[-12px] flex w-[2%] flex-col gap-[72px] md:w-full md:gap-[72px] md:ml-[-12px] sm:gap-[38px]">
            <div className="h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
            <div className="h-[14px] w-[14px] border-[3px] border-solid border-black-900_01 bg-white-A700_01" />
          </div>
        </div>
      </div>
    <div className="w-full border-[4px] border-solid border-black-900_01"/>
    </>
  );
}

export default Navbar;
