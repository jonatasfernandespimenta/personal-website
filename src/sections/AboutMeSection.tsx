import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { techs } from "@/utils/techs";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
  return (
    <div id="aboutme">
      <div className="flex md:flex-row flex-col-reverse items-center min-h-screen">
        <div className="flex justify-around flex-1 h-screen -mt-32 md:-mt-0 items-start p-6 md:p-36 flex-col">
          <div className="gap-4">
            <Heading textColor="[#72da8f]">About me</Heading>

            <p className="text-white whitespace-pre-line text-center md:text-left">
              Comecei minha jornada como desenvolvedor aos 12 anos tentando criar jogos. Na época eu queria muito jogar
              um certo jogo, porém, meu computador não era bom o suficiente para rodar ele, foi ai que tive a idéia de
              tentar recriar aquele jogo, porém, não fazia idéia de como começar. Após algumas pesquisas, acabei
              conhecendo o RPG Maker, uma ferramenta simples para criação de jogos. {"\n\n"} Alguns anos mais tarde,
              comecei a fazer um cursinho para poder passar na ETEC. Nesse cursinho, o meu professor era programador. Eu
              ainda tinha algumas dúvidas se eu realmente gostaria de seguir a area de TI. Esse meu professor foi me
              mostrando no fim das aulas alguns códigos dele e me ensinando algumas coisas. Consegui aprender bem rápido
              e ele me disse que seria um desperdicio de potencial eu não fazer TI. {"\n\n"} Segui o conselho dele e
              prestei para TI, adorei o curso. Quando eu voltava para casa e ia direto para o computador para por em
              prática o que aprendi nas aulas e experimentar coisas novas. {"\n\n"} No terceiro ano, me candidatei para
              o Venturus4Tech. Consegui passar e lá eu era o mais novo de todos. Ao final do evento acontecia uma
              entrevista para trabalhar como estagiario, porém, como eu estudava longe, acabou não dando certo. Pouco
              tempo depois comecei a fazer serviços freelancer para me desafiar um pouco e ver o quão preparado eu
              estava para "o mundo real". {"\n\n"} Hoje, continuo desenvolvendo com muita paixão e sempre em busca de
              novos desafios.
            </p>
          </div>

          <div className="gap-4">
            <SubHeading textColor="[#72da8f]" className="text-3xl mt-8">
              Certifications:
            </SubHeading>

            <p className="whitespace-pre-line text-white">
              • Ténico em Informatica - ETEC {"\n"}• Venturus 4Tech - Venturus {"\n"}• Assemble - Rocketseat {"\n"}•
              Desenvolvimento python - Udemy {"\n"}• NestJS Official Course - NestJS
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-around h-screen items-center p-36 flex-col">
          <div className="liquidImg mb-28">
            <img src="https://avatars.githubusercontent.com/u/51496759?v=4" />
          </div>

          <div className="liquid mt-10 md:ml-20" />
          {/* <Image src="/assets/pfp.png" alt="pfp" width={400} height={400} /> */}

          <div className="flex flex-col items-center gap-5">
            <SubHeading textColor="[#72da8f]" className="text-3xl">
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
