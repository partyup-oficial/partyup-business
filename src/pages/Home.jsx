import { useState } from "react";
import Navbar from "../components/Navbar";
import LandingImage from "../assets/images/dashboard-landing.png";
import PartyupBusiness from "../assets/images/partyup-business.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2A0127]">
      <Navbar />
      <button className="absolute top-0 p-32 text-3xl text-white -translate-x-24 rounded-full bg-[#460267] -translate-y-40">
        <span className="absolute left-32 top-44">Login</span>
      </button>

      <div className="flex items-center justify-between px-32 mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-white font-['Julius_Sans_One']">
            BEM-VINDO AO
          </h1>
          <img src={PartyupBusiness} width={500} />
        </div>
        <img src={LandingImage} width={800} />
      </div>
    </div>
  );
}
