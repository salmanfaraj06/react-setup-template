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
  <div className="relative w-full">
    <div className="relative w-full h-[560px] bg-white-A700_01 overflow-hidden md:h-auto">
  <div className="absolute inset-0 bg-[url(/public/images/img_group_7.svg)] bg-no-repeat bg-center bg-cover" />
      <div className="flex flex-col justify-between h-full p-8 md:p-5">
        <div>
          <Img
            src={portfolio}
            alt="portfolio"
            className="w-full h-auto max-h-[265px] md:max-h-[200px] mb-4"
          />
          <div>
            <Heading as="h2">{title}</Heading>
            <Text as="p" className="my-3 w-[75%]">
              {description}
            </Text>
          </div>
        </div>
        <Button size="xs" shape="square" className="w-10 h-10">
          <a href={link}>
            <Img src="images/img_arrow_left.svg" alt="arrow" />
          </a>
        </Button>
      </div>
    </div>
  </div>
);

function Projects() {
  return (
    <div className="flex flex-col items-center m-10">
      <div className="mb-4">
        <Text size="3xl" as="p">
          My Projects
        </Text>
        <Img
          src="images/img_vector_black_900_01.svg"
          alt="vector_seven"
          className="h-3 w-full max-w-[120px]"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-2 md:gap-6">
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

export default Projects;
