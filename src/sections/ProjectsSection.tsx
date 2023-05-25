"use client";

import Heading from "@/components/Heading";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div id="projects">
      <div className="absolute flex flex-1 min-h-screen z-0 left-0 -mt-32">
        <Image src={"/assets/projects-wave.svg"} alt="wave" width="1440" height="1024" />
      </div>

      <div className="flex flex-1 items-start p-36 flex-col">
        <div className="gap-4">
          <Heading textColor="green-400">Projects</Heading>
        </div>
      </div>
    </div>
  );
}
