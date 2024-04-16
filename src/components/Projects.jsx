import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";

const data = [
    { portfolio: "images/img_rectangle_6.png" },
    { portfolio: "images/img_rectangle_6_293x463.png" },
    { portfolio: "images/img_rectangle_6_1.png" },
    { portfolio: "images/img_rectangle_6_2.png" },
  ];
function Projects() {
  return (
    <div className="flex flex-col">
      <div className="mr-[203px] flex w-[64%] items-center self-end md:mr-0 md:w-full md:flex-col">
        <div className="relative mb-[9px] h-[109px] flex-1 self-end pt-[7px] md:w-full md:flex-none md:self-stretch">
          <Text
            size="3xl"
            as="p"
            className="absolute bottom-0 left-[0.00px] top-0 my-auto h-max"
          >
            My Portfolio ️
          </Text>
          <Img
            src="images/img_vector_black_900_01.svg"
            alt="vector_seven"
            className="absolute bottom-[-5px] left-[100px] m-auto h-[15px] w-[70%] "
          />
        </div>
        <Img
          src="images/img_frame_18.png"
          alt="image_two"
          className="h-[159px] w-[160px] object-cover md:w-full"
        />
      </div>
      <div className="ml-[45px] mt-[55px] grid grid-cols-2 gap-12 md:ml-0 md:grid-cols-1">
        {data.map((d, index) => (
          <div
            key={"gridfillone" + index}
            className="relative h-[565px] w-full md:h-auto"
          >
            <div className="h-[536px] w-[93%] bg-white-A700_01" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[565px] w-full bg-[url(/public/images/img_group_7.svg)] bg-cover bg-no-repeat p-[53px] md:h-auto md:p-5">
              <div className="mb-2 mt-[5px] flex flex-col gap-[31px]">
                <Img
                  src={d.portfolio}
                  alt="portfolio"
                  className="h-[293px] object-cover"
                />
                <div className="flex items-start justify-between gap-5 sm:flex-col">
                  <div className="flex w-[76%] flex-col items-start gap-[9px] sm:w-full">
                    <Heading as="h2">Portfolio design</Heading>
                    <Text as="p">
                      <>
                        UI design - User research -<br />
                        webflow develop
                      </>
                    </Text>
                  </div>
                  <Button size="xs" shape="square" className="w-[38px]">
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
