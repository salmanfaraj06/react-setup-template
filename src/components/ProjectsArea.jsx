import React from 'react'
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Text } from "./Text";

const ProjectsArea = ({ portfolio, title, description, link }) => {
    return(
            <div className='bg-[url(/public/images/back.svg)] bg-no-repeat bg-cover bg-center h-[650px] w-[491px] md:h-[400px] md:w-[300px] sm:h-[300px] sm:w-[225px]'>
                <div className='flex flex-col justify-between h-full p-10 md:p-5'>
                    <img src={portfolio} alt='portfolio' className='w-full h-auto max-h-[265px] md:max-h-[200px] mb-4' />
                    <div className='h-full'>
                        <div className='flex items-center justify-between'>
                            <Heading as="h2">{title}</Heading>{" "}
                            <Button size="xs" shape="square" className="w-10 h-10 sm:w-5 sm:h-5 md:w-7 md:h-7">
                                <a href={link}>
                                    <img className="" src="images/img_arrow_left.svg" alt="arrow" />
                                </a>
                            </Button>
                        </div>
                        <Text as="p" className="my-3 w-[75%] sm:text-[12px] md:text-[18px]">
                            {description}
                        </Text>
                    </div>
                </div>
            </div>
    )
}

export default ProjectsArea
