import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { IProjects } from "@/utils/projects";

interface ICarousel {
  projects: IProjects[];
}

const Carousel = ({ projects }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="z-10 flex flex-row justify-around items-center w-full px-32">
      <FaArrowLeft color="white" size={30} onClick={handlePrev} />
      {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
        <>
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techs={project.techs}
            isHighlighted={index === 1}
          />
        </>
      ))}
      <FaArrowRight color="white" size={30} onClick={handleNext} />
    </div>
  );
};

export default Carousel;
