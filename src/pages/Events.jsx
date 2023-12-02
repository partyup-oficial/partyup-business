import SideNavbar from "../components/SideNavbar";
import { useNavigate } from "react-router";
import { MdSearch } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

export default function Events() {
  const [selectedEvents, setSelectedEvents] = useState("Eventos em andamento");
  const navigate = useNavigate();
  return (
    <main className="bg-[url('./assets/images/partyup-background.png')] bg-cover bg-no-repeat">
      <div className="bg-black bg-opacity-60">
        <SideNavbar
          setSelectedEvents={setSelectedEvents}
          selectedEvents={selectedEvents}
        />
        <div className="ml-[28rem] pt-12 min-h-screen">
          <div className="flex items-center justify-between pb-6 pr-16">
            <h1 className="text-4xl font-bold text-orange-300">
              {selectedEvents}
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Realize sua busca aqui"
                className="w-[50rem] pl-20 border border-[#E579FF] rounded-md text-white text-xl px-2 placeholder-neutral-500 py-2"
              />
              <div className="absolute flex items-center left-4 pr-4 top-0 border-r h-full border-[#E579FF]">
                <button>
                  <MdSearch size={35} color="#E579FF" />
                </button>
              </div>
              <div className="absolute flex items-center right-4 pl-4 top-0 border-l h-full border-[#E579FF]">
                <button>
                  <IoFilter size={35} color="#E579FF" />
                </button>
              </div>
            </div>
          </div>
          <div
            // onScroll={() => {
            //   document.body.style.overflow = "hidden";
            // }}
            className="flex flex-wrap h-[50rem] gap-12 py-12 overflow-y-scroll custom-scroll">
            {Array(10)
              .fill("")
              .map(() => (
                <div
                  onClick={() => navigate("/dashboard")}
                  className="h-[12rem] w-[20rem] bg-[url('./assets/images/brazil.png')] bg-cover bg-no-repeat cursor-pointer">
                  <div className="relative h-full bg-gradient-to-t from-[rgba(0,0,0,0.81)] to-transparent transition duration-1000 ease-in-out hover:!from-[rgb(0,0,0)] group">
                    <span className="absolute bottom-0 p-2 text-sm font-medium text-white transition duration-300 ease-in-out group-hover:-translate-y-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.x
                      Facilis labore delectus quibusdam id, asperiores alias ab.
                    </span>
                  </div>
                </div>
              )) || (
              <span className="text-3xl text-white">
                Nenhum resultado encontrado
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
