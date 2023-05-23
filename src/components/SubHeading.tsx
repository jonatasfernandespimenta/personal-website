interface ISubHeading {
  children: any;
  className?: string;
  textColor?: string;
  textSize?: "4xl" | "3xl" | "2xl" | "xl";
}

export default function SubHeading(props: ISubHeading) {
  return (
    <p
      className={`
        py-2 
        text-${props.textColor ?? "white"}
        text-3xl
        font-roboto
        font-bold
        whitespace-pre-line
        ${props.className}
      `}
    >
      {props.children}
    </p>
  );
}
