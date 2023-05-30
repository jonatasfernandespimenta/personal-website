"use client";

import Carousel from "@/components/CardsCarousel";
import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/projects";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <div id="projects">
      <div className="absolute flex flex-1 min-h-screen z-0 left-0 -mt-32">
        <Image src={"/assets/projects-wave.svg"} alt="wave" width="1440" height="1024" />
      </div>

      <div className="flex flex-1 min-h-screen items-start p-36 flex-col z-20 justify-around">
        <div className="gap-4">
          <Heading textColor="[#72da8f]">Projects</Heading>
        </div>

        <Carousel projects={projects} />
      </div>
    </div>
  );
}
