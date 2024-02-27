export interface IProjects {
  title: string;
  description: string;
  techs: string[];
  image?: string;
  bg?: string;
}

export const projects: IProjects[] = [
  {
    bg: "#f9c6cc",
    title: "Quadroo",
    description:
      "Aplicativo para compra de quadros customizaveis, onde o cliente pode customizar seu quadro dentro do próprio aplicativo.",
    techs: ["NextJS", "Postgres", "Magento", "React Native", "NestJS", "Typescript", "TypeORM"],
    image:
      "https://raw.githubusercontent.com/jonatasfernandespimenta/personal-website/main/public/assets/quadroo.png",
  },
  {
    bg: "#fce962",
    title: "RPS with Webcam",
    description:
      "Este projeto é um site que permite jogar joquempô utilizando as suas mãos (requer webcam). Ele detecta as posições de suas mãos e dedos e usa isso como entrada.",
    techs: ["React", "TensorFlow", "CSS", "JavaScript"],
    image:
      "https://raw.githubusercontent.com/jonatasfernandespimenta/rock-paper-scissors-with-webcam/master/readme-stuff/animation.gif",
  },
  {
    bg: "#000",
    title: "Obux",
    description:
      "Obux permitirá que você troque livros com alguém que tenha um livro de seu interesse, pegue emprestado o livro de outra pessoa ou coloque seus próprios livros para trocas e para outras pessoas pegarem emprestado.",
    techs: ["NestJS", "MySQL", "TypeORM", "React Native", "Expo"],
    image: "https://cdn.discordapp.com/attachments/494292848728997899/1113158189567967352/image.png",
  },
  {
    bg: "#fff",
    title: "FigJam Clone",
    description: "Uma ferramenta para construção de diagramas inspirada no Jam do Figma",
    techs: ["React", "LiveBlocks", "Typescript", "React Flow"],
    image: "https://raw.githubusercontent.com/jonatasfernandespimenta/figma-jam-clone/main/readmestuff/animation.gif",
  },
  {
    bg: "#faf7f7",
    title: "Cards",
    description: "Site para criação de cards no estilo 'Postit'",
    techs: ["React", "JavaScript", "CSS", "Express", "NodeJS", "MongoDB"],
    image: "https://raw.githubusercontent.com/jonatasfernandespimenta/Cards/master/app.gif",
  },
  {
    bg: "#000",
    title: "ChatBot Mobile",
    description:
      "Aplicativo de ChatBot onde você pode conversar com ele e executar alguns comandos como abrir um aplicativo, tocar uma musica, entre outros. É possivel também editar as perguntas e respostas do chatbot",
    techs: ["React Native", "Expo", "Python", "Flask"],
    image: "https://raw.githubusercontent.com/jonatasfernandespimenta/ReactNativeChatBot/master/app.gif",
  },
  {
    bg: "#fff",
    title: "CxMapper",
    description:
      "Com o CxMapper você pode criar fluxos para criar automações de envios em massa para sua base de clientes.",
    techs: ["React", "Java Spring", "Typescript"],
    image: "/assets/tool.gif",
  },
];
