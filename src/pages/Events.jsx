import SideNavbar from "../components/SideNavbar";
import { MdSearch } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Events() {
  const [selectedEvents, setSelectedEvents] = useState("Eventos em andamento");
  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3003/viewEventsProgress")
      .then((e) => {
        const getEvents = e.data.results.map((e) => ({
          desc: e.desc_event,
          image: e.Event_image,
        }));
        console.log(e);
        setEventData(getEvents);
      })
      .catch((err) => {
        console.log(err);
        setEventData([]);
      });
  }, []);
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
            <div className="relative w-[50rem]">
              <input
                type="text"
                placeholder="Realize sua busca aqui"
                className="w-full pl-20 border border-[#E579FF] rounded-md text-white text-xl px-2 placeholder-neutral-500 py-2"
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

            className="flex flex-wrap h-[50rem] gap-12 gap-y-0 py-12 overflow-y-scroll custom-scroll">
            {eventData.length > 0 ? (
              eventData
                // Array(8)
                //   .fill("")
                .map((e) => (
                  <div
                    onClick={() => navigate("/dashboard")}
                    className="h-[12rem] w-[20rem] cursor-pointer relative group overflow-hidden">
                    <div className="z-10 relative h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent transition duration-1000 ease-in-out hover:!from-[rgb(0,0,0)]">
                      <span className="absolute bottom-0 p-2 text-sm font-medium text-white transition duration-300 ease-in-out group-hover:-translate-y-3">
                        {e.desc}
                      </span>
                    </div>
                    <img
                      src={`data:image/png;base64,${e.image}`}
                      alt=""
                      className="h-[12rem] w-[20rem] object-cover cursor-pointer bg-red-500 absolute top-0 group-hover:scale-110 transition-all ease-in-out duration-300"
                    />
                  </div>
                ))
            ) : (
              <span className="text-2xl text-white">
                Nenhum evento encontrado.
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
