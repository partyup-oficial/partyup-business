import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-transparent">
      <div className="flex justify-end gap-4">
        <button className="self-center px-6 py-2 text-white font-medium rounded-full shadow-black bg-gradient-to-b from-[#260138] to-[#82023F]">
          Nosso App
        </button>
        <button
          onClick={() => navigate("/eventos")}
          className="self-center px-6 py-2 text-white font-medium rounded-full shadow-black bg-gradient-to-b from-[#260138] to-[#82023F]">
          Meus eventos
        </button>
        <button className="font-medium text-white">Planos</button>
        <img src={Logo} width={60} />
      </div>
    </div>
  );
}
