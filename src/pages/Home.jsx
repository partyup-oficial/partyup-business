import { useState } from "react";
import Navbar from "../components/Navbar";
import Showball from "../assets/images/showball.png";
import LandingImage from "../assets/images/dashboard-landing.png";
import PcPhone from "../assets/images/pc-phone.png";
import PartyupBusiness from "../assets/images/partyup-business.png";
import { useNavigate } from "react-router";

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
    </div>
  );
}
