import { menus } from "@/utils/menus";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Link from "next/link";

export function Header() {
  return (
    <div className="bg-[#1E2124] w-screen fixed z-20 px-10 flex-row flex gap-10 items-center shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-sm">
      <Heading textColor="green-400">{"</>"}</Heading>

      {menus.map((item) => (
        <>
          <Link href={item.link}>
            <SubHeading textSize="2xl">{item.name}</SubHeading>
          </Link>
        </>
      ))}
    </div>
  );
}
