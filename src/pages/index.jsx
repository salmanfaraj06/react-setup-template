import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";

const data = [
  { portfolio: "images/img_rectangle_6.png" },
  { portfolio: "images/img_rectangle_6_293x463.png" },
  { portfolio: "images/img_rectangle_6_1.png" },
  { portfolio: "images/img_rectangle_6_2.png" },
];

export default function FivePage() {
  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name="description"
          content="Explore Rukaiyss's portfolio showcasing top-notch website designs, user research, and web development projects. Discover UI/UX services that deliver results."
        />
      </Helmet>

      <div className="w-full bg-yellow-50 pb-24 md:pb-2">
        <div className="flex flex-col items-center">
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
          <div className=" w-full border border-black-900_01"/>
          <div className="flex flex-col w-full">
            {/* intro section */}
            <div className="mx-auto mt-[42px] w-full max-w-[1251px] md:p-5">
              <div className="relative z-[2] flex flex-col items-end pl-14 pr-[261px] md:px-5">
                <div className="flex w-[34%] items-start md:w-full">
                  <div className="relative z-[3] mt-2 flex rotate-[7deg] items-start">
                    <Img
                      src="images/img_menu.svg"
                      alt="menu_one"
                      className="mb-0.5 h-[33px]"
                    />
                    <Heading
                      size="s"
                      as="h1"
                      className="text-shadow-ts mb-2.5 rotate-[16deg]"
                    >
                      Rukaiya
                    </Heading>
                  </div>
                  <Img
                    src="images/img_arrow_07.svg"
                    alt="arrowseven_one"
                    className="relative ml-[-28px] h-[183px] w-[183px]"
                  />
                </div>
              </div>
              <div className="relative mt-[-35px] flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[49%] flex-col gap-[25px] md:w-full">
                  <Img
                    src="images/img_frame_14.svg"
                    alt="image"
                    className="h-[203px] w-[204px]"
                  />
                  <div className="relative h-[222px] md:h-auto">
                    <div className="mb-[19px] mr-[25px] h-[44px] w-[55%] md:mr-0" />
                    <Text
                      size="3xl"
                      as="p"
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full"
                    >
                      <>
                        I design ✍️ top
                        <br />
                        notch websites{" "}
                      </>
                    </Text>
                  </div>
                  <div className="relative h-[139px] w-[58%] pt-6 sm:pt-5">
                    <Button
                      color="light_blue_100"
                      size="md"
                      shape="round"
                      className="absolute left-[0.00px] top-[24.53px] m-auto min-w-[291px] rotate-[-1deg] border-8 border-solid border-black-900_01 font-bold sm:px-5"
                    >
                      See Portfolio
                    </Button>
                    <Img
                      src="images/img_clock_black_900_01.png"
                      alt="clock_one"
                      className="absolute bottom-[0.62px] right-[-0.03px] m-auto h-[64px] w-[22%] object-cover"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_shape_rectangle_size7.svg"
                  alt="image_one"
                  className="h-[512px] w-[512px] md:w-full"
                />
              </div>
            </div>

            {/* skills section */}
            <div className="mt-6 flex flex-col items-start self-stretch">
              <Img
                src="images/img_vector.png"
                alt="vector_three"
                className="h-[127px] w-[6%] object-cover"
              />
              <div className="relative mt-[-18px] flex justify-center self-stretch bg-black-900_01 py-[34px] sm:py-5">
                <div className="mx-auto flex w-full max-w-[1238px] justify-between gap-5 self-end md:flex-col md:p-5">
                  <Text
                    size="2xl"
                    as="p"
                    className="self-end !text-white-A700_01"
                  >
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
          </div>
        </div>
        <div className="flex flex-col items-center gap-[162px] md:gap-[121px] sm:gap-[81px]">
          {/* portfolio section */}
          <div className="mx-auto mt-[46px] flex w-full max-w-[1244px] flex-col gap-[152px] md:gap-[114px] md:p-5 sm:gap-[76px]">
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

            

            {/* call to action section */}
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
                    Want to see how to transform your brand into a unique style.
                    sent us a message
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
          </div>

          {/* footer section */}
          <footer className="flex flex-col items-center gap-[83px] self-stretch md:gap-[62px] sm:gap-[41px]">
            <div className="h-[6px] w-full self-stretch bg-black-900_01" />
            <div className="mx-auto flex w-full max-w-[1253px] items-center justify-between gap-5 md:flex-col md:p-5">
              <div className="flex">
                <div className="flex items-center gap-[15px]">
                  <Img
                    src="images/img_close.svg"
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
              <div className="flex w-[23%] justify-between gap-5 md:w-full">
                <Img
                  src="images/img_globe.svg"
                  alt="globe_one"
                  className="h-[48px] w-[48px]"
                />
                <Img
                  src="images/img_ri_instagram_line.svg"
                  alt="riinstagram_one"
                  className="h-[48px] w-[48px]"
                />
                <Img
                  src="images/img_akar_icons_x_fill.svg"
                  alt="akariconsx_one"
                  className="h-[48px] w-[48px]"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
