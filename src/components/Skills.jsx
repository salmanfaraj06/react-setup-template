import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

const SkillItem = ({ title }) => (
  <Text size="xl" as="p" className="text-white-A700_01">
    {title}
  </Text>
);

const Skills = () => {
  const skills = ["Figma", "React", "HTML", "Adobe", "CSS"];

  return (
    <>
      <div className="flex justify-start">
        <Img
          src="images/img_vector.png"
          alt="vector_three"
          className="h-[127px] md:h-[100px] sm:h-[80px]"
        />
      </div>
      <div className="flex flex-wrap justify-center p-6  bg-black-900_01 md:p-5 space-x-36 md:space-x-6 sm:space-x-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} title={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
