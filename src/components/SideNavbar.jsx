import { useNavigate } from "react-router";
import Foto from "../assets/images/foto.png";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { TbCalendarCancel, TbCalendarUser } from "react-icons/tb";
import { MdEditCalendar } from "react-icons/md";

export default function SideNavbar({
  setSelectedEvents,
  selectedEvents,
  event,
  setEvent,
}) {
  const navigate = useNavigate();
  return (
    <div className="fixed z-10 left-0 min-h-screen bg-[#4c0b38] border-r-2 border-purple-800 rounded-tr-[4rem] rounded-br-[4rem]">
      <div className="relative flex flex-col items-center">
        <button onClick={() => navigate("/")} className="absolute left-0 p-3">
          <HiMiniArrowLeftOnRectangle size={35} color="#C864E0" />
        </button>
        <img
          src={`data:image/png;base64,${localStorage.getItem("user_image")}`}
          alt="foto"
          width={130}
          className="rounded-full h-[130px] mt-5"
        />
        <div className="text-xl text-[#FFC896]">
          <div className="flex flex-col mt-6 border-t border-purple-500">
            <button
              onClick={() => {
                setSelectedEvents("Eventos em andamento");
                setEvent("viewEventsProgress");
              }}
              className={`py-5 flex items-center gap-4 pl-4 hover:bg-[#2F0321] pr-28 ${
                selectedEvents === "Eventos em andamento" && "!bg-[#2F0321]"
              }`}>
              <MdEditCalendar size={35} color="#C864E0" />
              <h1>Eventos em andamento</h1>
            </button>
            <button
              onClick={() => {
                setSelectedEvents("Eventos encerrados");
                setEvent("viewEventsfinishes");
              }}
              className={`py-5 flex items-center gap-4 pl-4 hover:bg-[#2F0321] ${
                selectedEvents === "Eventos encerrados" && "!bg-[#2F0321]"
              }`}>
              <FaRegCalendarCheck size={35} color="#C864E0" />
              <h1>Eventos encerrados</h1>
            </button>
          </div>
          <div className="flex flex-col border-t border-purple-500">
            <button
              onClick={() => {
                setSelectedEvents("Eventos privados");
                setEvent("viewPrivateEventsDashboard");
              }}
              className={`py-5 flex items-center gap-4 pl-4 hover:bg-[#2F0321] ${
                selectedEvents === "Eventos privados" && "!bg-[#2F0321]"
              }`}>
              <TbCalendarCancel size={35} color="#C864E0" />
              <h1>Eventos privados</h1>
            </button>
            <button
              onClick={() => {
                setSelectedEvents("Eventos públicos");
                setEvent("viewPublicEventsDashboard");
              }}
              className={`py-5 flex items-center gap-4 pl-4 hover:bg-[#2F0321] ${
                selectedEvents === "Eventos públicos" && "!bg-[#2F0321]"
              }`}>
              <TbCalendarUser size={35} color="#C864E0" />
              <h1>Eventos públicos</h1>
            </button>
          </div>
        </div>
        {/* <span className="mt-auto">Versão 1.0.0</span> */}
      </div>
    </div>
  );
}
