import SubHeading from "./SubHeading";

interface IProjectCard {
  title: string;
  description: string;
  techs: string[];
  className?: string;
  isHighlighted?: boolean;
  image?: string;
  bg: string;
}

export default function ProjectCard(props: IProjectCard) {
  const techs = props.techs.join(" • ");

  return (
    <div
      className={` ${props.isHighlighted ? "scale-110" : "scale-100"} transition-transform duration-100 transform-gpu`}
    >
      <div className="bg-[#36393E] shadow-md rounded md:w-96 w-full border-b-2 border-[#72da8f]">
        <div
          className="min-h-[220px] max-h-[220px] bg-white w-full rounded-t flex items-center justify-center"
          style={{ background: props.bg }}
        >
          <img
            src={
              props.image ??
              "https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6220b67ed815d28806335429_how-to-develop-app.jpg"
            }
            className="rounded-t max-h-52 min-h-52"
          />
        </div>

        <div className="p-5 min-h-[350px] max-h-[350px]">
          <SubHeading className="text-3xl">{props.title}</SubHeading>
          <p className="text-white">{props.description}</p>

          <SubHeading className="mt-4 text-xl">Techs:</SubHeading>
          <p className="text-white">{techs}</p>
        </div>
      </div>
    </div>
  );
}
