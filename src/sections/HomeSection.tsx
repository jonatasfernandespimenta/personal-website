"use client";

import Lottie from "lottie-react";

import laptopCoffeeAnimation from "../animations/laptop-coffee.json";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import HighlightWord from "@/components/HighlightWord";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function HomeSection() {
  return (
    <div id="home">
      <div className="absolute md:flex-1 flex md:h-screen flex-1 z-0 right-0 -mr-10 bottom-0">
        <Image src={"/nextjs-github-pages/assets/home-wave.svg"} alt="wave" width="1440" height="1024" />
      </div>

      <div className="flex md:flex-row flex-col h-screen z-10">
        <div className="flex flex-1 h-screen justify-center text-center md:text-left md:justify-around items-center p-10 md:p-36 flex-col z-10">
          <div>
            <Heading>Hello,</Heading>

            <Heading>
              I am <HighlightWord>Jhonny,</HighlightWord>
            </Heading>

            <SubHeading>
              a <HighlightWord>Fullstack</HighlightWord> Developer with passion in <HighlightWord>JS</HighlightWord>
            </SubHeading>
          </div>

          <Link href={"#aboutme"}>
            <FaArrowDown color="white" size={32} className="animate-bounce mt-10 md:mt-0" />
          </Link>
        </div>

        <div className="flex flex-1 -mt-80 md:-mt-0 md:h-screen justify-center md:p-28 flex-col z-10">
          <Lottie animationData={laptopCoffeeAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
}
