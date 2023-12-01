import { useNavigate, useLocation } from "react-router";
import Foto from "../assets/images/foto.png";
import {
  FaComment,
  FaCommentAlt,
  FaComments,
  FaHeart,
  FaStarHalfAlt,
} from "react-icons/fa";

export default function DashNavbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed left-0 min-h-screen bg-[#480232]">
      <div className="flex flex-col items-center py-4">
        <img src={Foto} alt="foto" width={150} className="rounded-full" />
        <div className="flex flex-col pt-2 border-t-2 mt-6 border-purple-500 text-xl text-[#FFC896]">
          <button className="flex items-center gap-4 pr-32 py-4 pl-4 hover:bg-[#2F0321]">
            <FaStarHalfAlt size={25} color="#C864E0" />
            <h1>Avaliações</h1>
          </button>
          <button className="flex items-center gap-4 pr-32 py-4 pl-4 hover:bg-[#2F0321]">
            <FaComments size={25} color="#C864E0" />
            <h1>Comentários</h1>
          </button>
          <button className="flex items-center gap-4 pr-32 py-4 pl-4 hover:bg-[#2F0321]">
            <FaHeart size={25} color="#C864E0" />
            <h1>Interações</h1>
          </button>
        </div>
        {/* <span className="mt-auto">Versão 1.0.0</span> */}
      </div>
    </div>
  );
}
