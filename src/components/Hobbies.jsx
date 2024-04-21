import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";
import { Heading } from "./Heading";

const hobbiesData = [
  {
    title: "Reading",
    image: "images/gardening.jpeg",
  },
  {
    title: "Gardening",
    image: "images/gardening.jpeg",
  },
  {
    title: "Cooking",
    image: "images/gardening.jpeg",
  },
  {
    title: "Hiking",
    image: "images/gardening.jpeg",
  },
  {
    title: "Cooking",
    image: "images/gardening.jpeg",
  },
  {
    title: "Hiking",
    image: "images/gardening.jpeg",
  },
  // Add more hobbies as needed
];

const HobbyCard = ({ title, image }) => (
  <div className="bg-white-A700_01 overflow-hidden border-8 border-solid border-black-900_01 max-w-[350px] ">
    <Img src={image} alt={title} className="w-full h-auto p-6" />
    <div className="p-4">
      <Text size="lg" className="font-bold mb-2">
        {title}
      </Text>
    </div>
  </div>
);

function Hobbies() {
  return (
    <div className="m-auto mt-[100px] w-full max-w-[1250px] mb-12">
      <div className="mb-14 md:mx-5">
        <Heading as="h2" className="text-left">
          Where can you find me when
          <br />
          I’m not working?
        </Heading>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8 md:mx-5">
        {hobbiesData.map((hobby, index) => (
          <HobbyCard
            key={"hobby" + index}
            title={hobby.title}
            image={hobby.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
