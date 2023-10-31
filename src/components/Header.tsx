import { menus } from "@/utils/menus";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Link from "next/link";

export function Header() {
  return (
    <div className="bg-[#1E2124] w-screen fixed z-20 px-10 flex-row flex gap-2 md:gap-10 items-center shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-sm">
      <Heading textColor="[#72da8f]">{"</>"}</Heading>

      {menus.map((item) => (
        <>
          <Link href={item.link}>
            <SubHeading className="text-base">{item.name}</SubHeading>
          </Link>
        </>
      ))}
    </div>
  );
}
