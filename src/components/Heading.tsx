interface IHeading {
  children: any;
  className?: string;
  textColor?: string;
}

export default function Heading(props: IHeading) {
  return (
    <p
      className={`
        py-2 
        text-${props.textColor ?? "white"}
        text-5xl
        font-roboto
        font-extrabold
        whitespace-pre-line
        ${props.className}
      `}
    >
      {props.children}
    </p>
  );
}
