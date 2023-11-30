import { useState } from "react";
import Navbar from "../components/Navbar";
import LandingImage from "../assets/images/dashboard-landing.png";
import PartyupBusiness from "../assets/images/partyup-business.png";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#2A0127]">
        <Navbar />
        <div className="flex justify-between items-center mt-12 px-32">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-white font-['Julius_Sans_One']">
              BEM-VINDO AO
            </h1>
            <img className="self-" src={PartyupBusiness} width={500} />
          </div>
          <img src={LandingImage} width={900} />
        </div>
      </div>
    </>
  );
}
