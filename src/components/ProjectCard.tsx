import SubHeading from "./SubHeading";

interface IProjectCard {
  title: string;
  description: string;
  techs: string[];
  className?: string;
  isHighlighted?: boolean;
}

export default function ProjectCard(props: IProjectCard) {
  const techs = props.techs.join(" • ");

  return (
    <div
      className={` ${props.isHighlighted ? "scale-110" : "scale-100"} transition-transform duration-100 transform-gpu`}
    >
      <div className="bg-[#36393E] shadow-md rounded w-96 border-b-2 border-green-400">
        <div className="h-50 bg-white w-full rounded-t">
          <img
            src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6220b67ed815d28806335429_how-to-develop-app.jpg"
            className="rounded-t"
          />
        </div>

        <div className="p-5">
          <SubHeading textSize="2xl">{props.title}</SubHeading>
          <p className="text-white">{props.description}</p>

          <SubHeading textSize="2xl" className="mt-4">
            Techs
          </SubHeading>
          <p className="text-white">{techs}</p>
        </div>
      </div>
    </div>
  );
}
