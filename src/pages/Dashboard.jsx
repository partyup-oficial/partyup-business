import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import DataBoxes from "../components/DataBoxes";
import RateButtons from "../components/RateButtons";
import Comments from "../components/Comments";
import { FaHouse } from "react-icons/fa6";
import { FaCalendarAlt, FaStarHalfAlt } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useNavigate, useLocation } from "react-router";
import Foto from "../assets/images/foto.png";

// import SideNavbar from "../components/SideNavbar";

export default function Dashboard() {
  const location = useLocation();
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    console.log(location.state.id);
    axios
      .get(`http://localhost:3003/viewEvent/${location.state.id}`)
      .then((e) => {
        console.log(e);
        setEventData({
          name: e.data[0].Nm_event,
          desc: e.data[0].desc_event,
          image: e.data[0].Event_image,
        });
      })
      .catch((err) => {
        console.log(err);
        setEventData([]);
      });
  }, []);

  const [citiesData, setCitiesData] = useState({
    labels: [
      "Santos",
      "São Vicente",
      "Praia Grande",
      "Cubatão",
      "Bertioga",
      "São Paulo",
      "Salvador",
      "Guarujá",
      "Campinas",
      "Belo Horizonte",
    ],
    data: [
      { x: 0, y: 185 },
      { x: 0, y: 32 },
      { x: 0, y: 109 },
      { x: 0, y: 109 },
      { x: 0, y: 159 },
      { x: 0, y: 309 },
      { x: 0, y: 109 },
      { x: 0, y: 32 },
      { x: 0, y: 109 },
      { x: 0, y: 10 },
    ],
    title: "Cidades",
  });

  const [weekData, setWeekData] = useState({
    labels: [
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
      "Domingo",
    ],
    data: [
      { x: 0, y: 185 },
      { x: 0, y: 32 },
      { x: 0, y: 9 },
      { x: 0, y: 149 },
      { x: 0, y: 19 },
      { x: 0, y: 139 },
      { x: 0, y: 109 },
    ],
    title: "Dias da semana",
  });

  const [hourData, setHourData] = useState({
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    data: [
      { x: 0, y: 185 },
      { x: 0, y: 32 },
      { x: 0, y: 109 },
      { x: 0, y: 75 },
      { x: 0, y: 194 },
      { x: 0, y: 121 },
      { x: 0, y: 56 },
      { x: 0, y: 167 },
      { x: 0, y: 88 },
      { x: 0, y: 45 },
      { x: 0, y: 199 },
      { x: 0, y: 102 },
      { x: 0, y: 83 },
      { x: 0, y: 150 },
      { x: 0, y: 12 },
      { x: 0, y: 176 },
      { x: 0, y: 68 },
      { x: 0, y: 99 },
      { x: 0, y: 154 },
      { x: 0, y: 37 },
      { x: 0, y: 123 },
      { x: 0, y: 88 },
      { x: 0, y: 190 },
      { x: 0, y: 57 },
    ],
    title: "Horários",
  });
  const [btn, setBtn] = useState(citiesData);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "top",
        // labels: {
        //   font: {
        //     size: 20,
        //   },
        //   color: "#ffffff",
        // },
      },
      title: {
        display: true,
        text: btn.title,
        font: {
          size: 20,
        },
        color: "#ffffff",
      },
    },
    layout: {
      padding: 0,
    },
    scales: {
      y: {
        suggestedMin: 0,
        ticks: {
          font: {
            size: 20,
          },
          color: "#ffffff",
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: "#ffffff",
        },
      },
    },
  };

  const labels = btn.labels;
  const data = {
    labels,
    datasets: [
      {
        data: btn.data,
        backgroundColor: "#F72A8E",
      },
    ],
  };

  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center bg-[url('./assets/images/partyup-background.png')] bg-cover bg-no-repeat min-h-screen">
      <div className="relative px-32 pt-4 pb-20 flex flex-col items-center bg-[#2A0127] bg-opacity-80 border border-[#E579FF]">
        <div className="absolute flex gap-3 left-4">
          <button onClick={() => navigate("/eventos")}>
            <FaHouse size={30} color="#E579FF" />
          </button>
          <GoGear size={30} color="#E579FF" />
        </div>
        <img src={Foto} width={100} className="absolute rounded-full right-8" />
        <div className="flex items-center gap-4">
          <FaCalendarAlt size={30} color="#E579FF" />
          <h1 className="text-4xl font-bold text-yellow-500">
            {eventData.name}
          </h1>
        </div>
        <div className="flex mt-20">
          <div>
            {/* <SideNavbar /> */}
            <DataBoxes />
            <RateButtons
              citiesData={citiesData}
              hourData={hourData}
              weekData={weekData}
              setBtn={setBtn}
              btn={btn}
            />
            <div className="p-5 bg-black border-2 border-purple-500 bg-opacity-60 rounded-[2rem] mt-6">
              <Bar options={options} data={data} width={700} height={300} />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-center gap-2 m-auto mb-5">
              <FaStarHalfAlt size={40} color="#C864E0" />
              <span className="text-3xl font-bold text-white">4,2</span>
            </div>
            <Comments />
          </div>
        </div>
      </div>
    </main>
  );
}
