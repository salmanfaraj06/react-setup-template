import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Button } from "./Button";

const data = [
    { 
        portfolio: "images/img_rectangle_6.png",
        title: "Portfolio design",
        description: "UI design - User research - webflow develop",
        link: "#"
    },
    { 
      portfolio: "images/img_rectangle_6.png",
      title: "Portfolio design",
      description: "UI design - User research - webflow develop",
      link: "#"
  },
  { 
    portfolio: "images/img_rectangle_6.png",
    title: "Portfolio design",
    description: "UI design - User research - webflow develop",
    link: "#"
},
{ 
  portfolio: "images/img_rectangle_6.png",
  title: "Portfolio design",
  description: "UI design - User research - webflow develop",
  link: "#"
},
    // ... add more projects here
];

const ProjectCard = ({ portfolio, title, description, link }) => (
    <div className="relative h-[560px] w-full m-auto">
        <div className="h-[536px] w-[80%] bg-white-A700_01 ml-[10%]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-full w-[85%] bg-[url(/public/images/img_group_7.svg)] bg-no-repeat p-[53px] md:h-auto md:p-5">
            <div className=" flex flex-col gap-[31px]">
                <Img
                    src={portfolio}
                    alt="portfolio"
                    className="h-[265px] w-[475px]"
                />
                <div className="flex items-start justify-between w-[100%] gap-5 sm:flex-col">
                    <div className="flex w-[70%] flex-col items-start gap-[9px] sm:w-full">
                        <Heading as="h2">{title}</Heading>
                        <Text as="p">
                            <>{description}</>
                        </Text>
                    </div>
                    <Button size="xs" shape="square" className="w-[38px]">
                        <a href={link}>
                            <Img src="images/img_arrow_left.svg" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

function Projects() {
    return (
        <div className="flex flex-col m-10">
            <div className="items-center self-center m-auto md:mr-0 md:w-full md:flex-col">
                <div className="relative mb-[9px] h-[100px] flex-1 pt-[7px] md:w-full md:flex-none md:self-stretch">
                    <Text
                        size="3xl"
                        as="p"
                        className="m-auto justify-center items-center "
                    >
                        My Projects
                    </Text>
                    <Img
                        src="images/img_vector_black_900_01.svg"
                        alt="vector_seven"
                        className="absolute bottom-[-9px] left-[120px] m-auto h-[15px] w-[70%] "
                    />
                </div>
            </div>
            <div className="mt-[50px] mx-9 grid grid-cols-2 gap-9  md:ml-0 md:grid-cols-1">
                {data.map((project, index) => (
                    <ProjectCard
                        key={"project" + index}
                        portfolio={project.portfolio}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects