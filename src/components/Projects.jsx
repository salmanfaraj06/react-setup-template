import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import ProjectsArea from "./ProjectsArea";
import LazyLoad from "react-lazyload";

const data = [
  {
    portfolio: "images/thumbnails/movematee.png",
    title: "moveMate",
    description: [
      "A case study on the mobile application 'moveMate'.",
      "moveMate is a gamified solution designed to transform stroke recovery into an engaging and empowering journey.",
      "Also avaiable as a web application.",
    ],
    link: "https://www.behance.net/gallery/198496933/moveMate",
  },
  {
    portfolio: "images/thumbnails/IX-23.png",
    title: "IX-23 designathon",
    description: "UI design - Apple Vision Pro",
    link: "https://www.figma.com/file/QmbiGJuGQ8PzSPz8PZUsI7/Design100?type=design&mode=design&t=y6RBPTOJ31fTNkGV-1",
  },

  {
    portfolio: "images/thumbnails/beepure.png",
    title: "BeePure",
    description: "UI design - Mobile App",
    link: "https://www.figma.com/file/exWltRLkMIwUx78BztqYJ7/Honey-App?type=design&node-id=0%3A1&mode=design&t=y6RBPTOJ31fTNkGV-1",
  },
  {
    portfolio: "images/thumbnails/Rescufy.png",
    title: "Rescufy",
    description: "UI design - Mobile App",
    link: "https://www.figma.com/file/FQMrevNmTpnGfo7YLAZnE0/rescufy?type=design&node-id=1%3A131&mode=design&t=y6RBPTOJ31fTNkGV-1",
  },
  {
    portfolio: "images/thumbnails/ticketMate.png",
    title: "ticketMate",
    description: "UI design - Mobile App",
    link: "https://www.figma.com/file/W9XHPCuDH6nZNaw7YfIBhH/Benchmark?type=design&node-id=0-1&mode=design&t=y6RBPTOJ31fTNkGV-0",
  },
  {
    portfolio: "images/thumbnails/spaceOdessey.png",
    title: "Space Odessey",
    description: "UI design - Mobile App",
    link: "https://www.figma.com/file/m9o26LfpKlj3qZOD6xmxIa/dev100?type=design&mode=design&t=y6RBPTOJ31fTNkGV-0",
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
