import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { FaArrowRight } from "react-icons/fa";

const achievementsData = [
  {
    image: "images/achievement.jpeg",
    title: "Achievement 1",
    description: "Description of Achievement 1.",
    link: "#",
  },
  {
    image: "images/achievement.jpeg",
    title: "Achievement 2",
    description: "Description of Achievement 2.",
    link: "#",
  },
  {
    image: "images/achievement.jpeg",
    title: "Achievement 3",
    description: "Description of Achievement 3.",
    link: "#",
  },
  {
    image: "images/achievement.jpeg",
    title: "Achievement 4",
    description: "Description of Achievement 4. ",
    link: "#",
  },
  // Add more achievements here
];

const Achievement = ({ image, title, description, link }) => (
  <div className="flex flex-row md:flex-col bg-white shadow-lg rounded-xl mb-4 border-8 sm:border-4 border-black-900">
    <Img
      src={image}
      alt={title}
      className="h-auto sm:h-[160px] sm:w-full w-[300px] md:h-[220px]"
      loading="lazy"
    />
    <div className="p-4 flex flex-col justify-between">
      <div>
        <Text
          size="md"
          as="p"
          className="mb-2 md:text-xg text-4xl sm:text-[16px] font-medium"
        >
          {title}
        </Text>
        <Text
          size="sm"
          as="p"
          className="text-gray-700 mb-4 md:text-base sm:text-sm text-lg"
        >
          {description}
        </Text>
      </div>
      {link && (
        <a href={link} className="flex items-center font-bold text-black-900">
          <span className="mr-1 md:text-sm text-base">Learn More</span>
          <FaArrowRight />
        </a>
      )}
    </div>
  </div>
);

function Achievements() {
  return (
    <div className="flex flex-col m-12 sm:m-1 items-center my-10 sm:my-2">
      <Text
        size="mypro"
        as="p"
        className=" md:text-[36px] sm:text-[29px] font-medium m-3 text-center"
      >
        My Achievements
      </Text>
      <Img
        src="images/img_vector_black_900_01.svg"
        alt="vector_seven"
        className="h-4 w-1/2 sm:w-full  md:w-1/3 sm:h-2 md:h-3/4"
      />
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-6 p-5 sm:mt-3 sm:p-3">
        {achievementsData.map((achievement, index) => (
          <Achievement
            key={index}
            image={achievement.image}
            title={achievement.title}
            description={achievement.description}
            link={achievement.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
