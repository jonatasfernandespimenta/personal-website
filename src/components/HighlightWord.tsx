interface IHighlightWord {
  children: any;
  className?: string;
}

export default function HighlightWord(props: IHighlightWord) {
  return <span className={`text-green-400 ${props.className}`}>{props.children}</span>;
}
