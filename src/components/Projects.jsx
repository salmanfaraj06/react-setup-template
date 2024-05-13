import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import ProjectsArea from "./ProjectsArea";
import LazyLoad from "react-lazyload";

const data = [
  {
    portfolio: "images/thumbnails/movematee.png",
    title: "moveMate",
    description: "UI design - User research - webflow develop",
    link: "https://www.behance.net/gallery/198496933/moveMate",
  },
  {
    portfolio: "images/thumbnails/IX-23.png",
    title: "IX-23 designathon",
    description: "UI design - User research - webflow develop",
    link: "#",
  },

  {
    portfolio: "images/thumbnails/beepure.png",
    title: "beePure",
    description: "UI design - User research - webflow develop",
    link: "#",
  },
  {
    portfolio: "images/thumbnails/Rescufy.png",
    title: "Rescufy",
    description: "UI design - User research - webflow develop",
    link: "#",
  },
  {
    portfolio: "images/thumbnails/ticketMate.png",
    title: "ticketMate",
    description: "UI design - User research - host develop lorem10 efwugwuhwg ",
    link: "#",
  },
  {
    portfolio: "images/thumbnails/spaceOdessey.png",
    title: "Space Odessey",
    description: "UI design - User research - host develop lorem10 efwugwuhwg ",
    link: "#",
  },
  // ... add more projects here
];

function Projects() {
  return (
    <div className="flex flex-col items-center m-10">
      <div className="mb-10">
        <Text size="mypro" as="p">
          My Projects
        </Text>
        <Img
          src="images/img_vector_black_900_01.svg"
          alt="vector_seven"
          className="h-4 w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-12 md:grid-cols-1 md:gap-10 gap-x-19">
        {data.map((project, index) => (
          <LazyLoad key={index} height={200} offset={100}>
            <ProjectsArea
              portfolio={project.portfolio}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Projects;
