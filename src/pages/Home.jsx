import { useState } from "react";
import Navbar from "../components/Navbar";
import Showball from "../assets/images/showball.png";
import LandingImage from "../assets/images/dashboard-landing.png";
import PcPhone from "../assets/images/pc-phone.png";
import PartyupBusiness from "../assets/images/partyup-business.png";
import { useNavigate } from "react-router";
import Logo from "../assets/logo.svg";
import Benefits from "../components/Benefits";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#2A0127]">
      <Navbar />
      <div className="absolute top-0">
        <img src={Showball} alt="showball" width={350} />
      </div>

      <div className="flex items-center justify-between px-32 mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-white font-['Julius_Sans_One']">
            BEM-VINDO AO
          </h1>
          <img src={PartyupBusiness} width={500} />
        </div>
        <img src={LandingImage} width={800} />
      </div>
      <div className="flex flex-col items-center py-24">
        <h1 className="text-4xl font-bold text-purple-200 text-border-pink-400 text-border-size-[16px]">
          Conheça o Party Up : O melhor lugar para seus eventos!
        </h1>
        <div className="flex items-center justify-between gap-32 px-20 mt-12">
          <img src={PcPhone} width={600} />
          <div className="flex flex-col items-center">
            <ul className="flex flex-col gap-6 text-2xl text-white list-disc">
              <li>
                Elimine a indecisão ao escolher como passar seu tempo livre
              </li>
              <li>
                Encontre atividades de lazer que se alinham perfeitamente aos
                seus interesses.
              </li>
              <li>
                Conectando organizadores, eventos e o público interessado.
              </li>
              <li>
                Transforme seus momentos de lazer em memórias inesquecíveis.
                Experimente a revolução dos eventos agora!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Benefits />
      <h1 className="text-4xl font-bold text-center text-purple-200 text-border-pink-400 text-border-size-[16px]">
        Conheça nossos planos
      </h1>
      <div className="py-6">
        <div className="flex items-center text-white bg-[#61075B] w-[40%] rounded-r-[3rem] my-12 px-12 pb-4">
          <img src={Logo} width={150} className="-mb-5" />
          <h1 className="ml-36 text-4xl font-bold text-center text-purple-100 text-border-pink-400 text-border-size-[16px]">
            Plano <br /> Mensal
          </h1>
          <ul className="w-[20rem] m-auto text-xs flex flex-col gap-4 hidden">
            <li>
              - Acesso completo ao Dashboard, proporcionando uma visão detalhada
              e abrangente do desempenho de seus eventos.
            </li>
            <li>
              - Suporte ao cliente dedicado, com assistência por e-mail,
              garantindo respostas prioritárias para resolver eventuais questões
              ou dúvidas.
            </li>
            <li>
              - Atualizações regulares de recursos, mantendo a plataforma
              alinhada às últimas tendências e demandas do mercado. Filtro de
              análise de métricas conforme as necessidades específicas de seus
              eventos.
            </li>
          </ul>
          <h1 className="ml-auto text-6xl font-bold text-purple-100">
            <span className="mr-1 text-2xl">R$</span>
            <span className="text-purple-200 text-border-pink-600 text-border-size-[8px]">
              99
            </span>
            <span className="ml-1 text-xl align-top">,99</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-end py-6">
        <div className="flex items-center flex-row-reverse text-white bg-[#61075B] w-[40%] rounded-l-[3rem] px-12 pb-4">
          <img src={Logo} width={150} className="-mb-5" />
          <h1 className="mr-36 text-4xl font-bold text-center text-purple-100 text-border-pink-400 text-border-size-[16px]">
            Plano <br /> Anual
          </h1>
          <h1 className="mr-auto text-6xl font-bold text-purple-100">
            <span className="mr-1 text-2xl ">R$</span>
            <span className="text-purple-200 text-border-pink-600 text-border-size-[8px]">
              899
            </span>
            <span className="ml-1 text-xl align-top">,99</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
