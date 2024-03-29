import React from "react";
import ProjectCard from "./ProjectCard";
import { IProjects } from "@/utils/projects";
import Carousel from "react-elastic-carousel";

interface ICarousel {
  projects: IProjects[];
}

const CarouselA = ({ projects }: ICarousel) => {
  return (
    <div className="z-10 flex flex-row md:justify-around items-center w-full md:px-32">
      {/* @ts-ignore */}
      <Carousel itemsToShow={1} pagination={false}>
        {projects.map((project, index) => (
          <>
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techs={project.techs}
              image={project.image}
              bg={project.bg}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselA;
