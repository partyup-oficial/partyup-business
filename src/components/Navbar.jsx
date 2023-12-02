import Logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-transparent">
      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="self-center px-6 py-2 text-white font-medium rounded-full shadow-black bg-gradient-to-b from-[#260138] to-[#82023F]">
          Nosso App
        </button>
        <button className="font-medium text-white">Planos</button>
        <img src={Logo} width={60} />
      </div>
    </div>
  );
}
