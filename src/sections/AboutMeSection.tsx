import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { techs } from "@/utils/techs";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
  return (
    <div id="aboutme">
      <div className="flex flex-row min-h-screen">
        <div className="flex justify-around flex-1 h-screen items-start p-36 flex-col">
          <div className="gap-4">
            <Heading textColor="green-400">About me</Heading>

            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ligula quis lorem porta sodales
              sed quis nulla. Duis in eros eu nunc porttitor dignissim in eu augue. Vivamus vehicula scelerisque mauris
              sit amet porttitor. Ut ultricies nulla at consequat aliquam. Phasellus tincidunt felis id tellus mollis
              porta. Nulla rutrum vitae dolor a vestibulum. Sed sed purus accumsan diam tempus feugiat. Suspendisse quis
              lectus ornare, lacinia ante eget, lacinia massa. Pellentesque ac faucibus eros, sit amet porta justo. Nam
              ligula tellus, facilisis sed consectetur id, luctus quis leo. Aenean bibendum, risus eu convallis
              efficitur, mi sem sollicitudin orci, non tincidunt nulla sapien non ligula. Quisque sagittis erat dapibus
              risus luctus laoreet. Mauris id dolor eget ante fermentum vulputate. Duis eros lacus, elementum sit amet
              velit quis, tristique aliquet massa.
            </p>
          </div>

          <div className="gap-4">
            <SubHeading textColor="green-400" textSize="3xl">
              Certifications:
            </SubHeading>

            <p className="whitespace-pre-line text-white">
              • Ténico em Informatica - ETEC {"\n"}• Venturus 4Tech - Venturus {"\n"}• Assemble - Rocketseat {"\n"}•
              Desenvolvimento python - Udemy {"\n"}• NestJS Official Course - NestJS
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-around h-screen items-center p-36 flex-col">
          <Image src="/assets/pfp.png" alt="pfp" width={400} height={400} />

          <div className="flex flex-col items-center gap-5">
            <SubHeading textColor="green-400" textSize="3xl">
              Techs I use:
            </SubHeading>

            <div className="flex flex-row gap-4">
              {techs.map((tech) => (
                <div className="cursor-pointer flex items-center">
                  <Link href={tech.link} target="_blank">
                    <Image
                      src={`/assets/techs/${tech.name}.png`}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="transition-transform duration-100 transform-gpu hover:scale-110"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
