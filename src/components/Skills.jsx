
import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

const SkillItem = ({ title }) => (
  <Text size="2xl" as="p" className="text-white-A700_01 mx-7">
    {title}
  </Text>
);

const Skills = () => {
  const skills = ["Figma", "React", "HTML", "Notion", "CSS"];

  return (
    <>
      <div >
        <Img
          src="images/img_vector.png"
          alt="vector_three"
          className="h-[127px] w-[7%] object-fill"
        />
      </div>
      <div className="flex items-center justify-between bg-black-900_01  p-10">
        {skills.map((skill, index) => (
          <SkillItem key={index} title={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
