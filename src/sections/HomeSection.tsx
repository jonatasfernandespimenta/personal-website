"use client";

import Lottie from "lottie-react";

import laptopCoffeeAnimation from "../animations/laptop-coffee.json";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import HighlightWord from "@/components/HighlightWord";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

export default function HomeSection() {
  return (
    <>
      <div className="absolute flex flex-1 h-screen z-0 right-0 -mr-10">
        <Image src={"/assets/home-wave.svg"} alt="wave" width="1440" height="1024" />
      </div>

      <div className="flex flex-row h-screen z-10">
        <div className="flex flex-1 h-screen justify-around items-center p-36 flex-col z-10">
          <div>
            <Heading>Hello,</Heading>

            <Heading>
              I am <HighlightWord>Jhonny,</HighlightWord>
            </Heading>

            <SubHeading>
              a <HighlightWord>Fullstack</HighlightWord> Developer with passion in <HighlightWord>JS</HighlightWord>
            </SubHeading>
          </div>

          <FaArrowDown color="white" size={32} />
        </div>

        <div className="flex flex-1 h-screen justify-center p-28 flex-col z-10">
          <Lottie animationData={laptopCoffeeAnimation} loop={true} />
        </div>
      </div>
    </>
  );
}
