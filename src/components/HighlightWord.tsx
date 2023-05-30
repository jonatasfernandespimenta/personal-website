interface IHighlightWord {
  children: any;
  className?: string;
}

export default function HighlightWord(props: IHighlightWord) {
  return <span className={`text-[#72da8f] ${props.className}`}>{props.children}</span>;
}
