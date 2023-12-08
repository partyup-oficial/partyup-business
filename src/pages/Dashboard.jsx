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
  const [dataTrigger, setDataTrigger] = useState("likes");
  const [option, setOption] = useState("cities");
  const id_event = location.state.id;

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
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
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
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
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
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    title: "Horários",
  });
  const [chart, setChart] = useState(citiesData);
  useEffect(() => {
    setEventData({
      name: location.state.name,
    });
    if (dataTrigger === "likes") {
      axios
        .get(`http://localhost:3003/dashboardDaysLike/${id_event}`)
        .then((e) => {
          setWeekData({
            ...weekData,
            data: [
              { x: 0, y: e.data.viewdayLike[0] },
              { x: 0, y: e.data.viewdayLike[1] },
              { x: 0, y: e.data.viewdayLike[2] },
              { x: 0, y: e.data.viewdayLike[3] },
              { x: 0, y: e.data.viewdayLike[4] },
              { x: 0, y: e.data.viewdayLike[5] },
              { x: 0, y: e.data.viewdayLike[6] },
            ],
          });
        })
        .catch((err) => {
          console.log(err);
          setWeekData({});
        });
      axios
        .get(`http://localhost:3003/dashboardLikeHour/${location.state.id}`)
        .then((e) => {
          setHourData({
            ...hourData,
            data: [
              { x: 0, y: e.data.viewHoursLike[0] },
              { x: 0, y: e.data.viewHoursLike[1] },
              { x: 0, y: e.data.viewHoursLike[2] },
              { x: 0, y: e.data.viewHoursLike[3] },
              { x: 0, y: e.data.viewHoursLike[4] },
              { x: 0, y: e.data.viewHoursLike[5] },
              { x: 0, y: e.data.viewHoursLike[6] },
              { x: 0, y: e.data.viewHoursLike[7] },
              { x: 0, y: e.data.viewHoursLike[8] },
              { x: 0, y: e.data.viewHoursLike[9] },
              { x: 0, y: e.data.viewHoursLike[10] },
              { x: 0, y: e.data.viewHoursLike[11] },
              { x: 0, y: e.data.viewHoursLike[12] },
              { x: 0, y: e.data.viewHoursLike[13] },
              { x: 0, y: e.data.viewHoursLike[14] },
              { x: 0, y: e.data.viewHoursLike[15] },
              { x: 0, y: e.data.viewHoursLike[16] },
              { x: 0, y: e.data.viewHoursLike[17] },
              { x: 0, y: e.data.viewHoursLike[18] },
              { x: 0, y: e.data.viewHoursLike[19] },
              { x: 0, y: e.data.viewHoursLike[20] },
              { x: 0, y: e.data.viewHoursLike[21] },
              { x: 0, y: e.data.viewHoursLike[22] },
              { x: 0, y: e.data.viewHoursLike[23] },
            ],
          });
        })
        .catch((err) => {
          console.log("deu erro");
          setHourData({});
        });
      axios
        .get(`http://localhost:3003/dashboardLikeCity/${location.state.id}`)
        .then((e) => {
          // console.log(e);
          setCitiesData({
            ...citiesData,
            data: [
              { x: 0, y: e.data.viewCityLike[0] },
              { x: 0, y: e.data.viewCityLike[1] },
              { x: 0, y: e.data.viewCityLike[2] },
              { x: 0, y: e.data.viewCityLike[3] },
              { x: 0, y: e.data.viewCityLike[4] },
              { x: 0, y: e.data.viewCityLike[5] },
              { x: 0, y: e.data.viewCityLike[6] },
              { x: 0, y: e.data.viewCityLike[7] },
              { x: 0, y: e.data.viewCityLike[8] },
              { x: 0, y: e.data.viewCityLike[9] },
            ],
          });
        })
        .catch((err) => {
          console.log("deu erro");
          setCitiesData({});
        });
    } else {
      axios
        .get(
          `http://localhost:3003/dashboardconfirmPresence/${location.state.id}`
        )
        .then((e) => {
          // console.log(e);
          setWeekData({
            ...weekData,
            data: [
              { x: 0, y: e.data.viewdaysconfirm[0] },
              { x: 0, y: e.data.viewdaysconfirm[1] },
              { x: 0, y: e.data.viewdaysconfirm[2] },
              { x: 0, y: e.data.viewdaysconfirm[3] },
              { x: 0, y: e.data.viewdaysconfirm[4] },
              { x: 0, y: e.data.viewdaysconfirm[5] },
              { x: 0, y: e.data.viewdaysconfirm[6] },
            ],
          });
        })
        .catch((err) => {
          console.log(err);
          setWeekData({});
        });
      axios
        .get(
          `http://localhost:3003/dashboardconfirmPresenceHour/${location.state.id}`
        )
        .then((e) => {
          // console.log(e);
          if (dataTrigger === "presencas") {
          }
          setHourData({
            ...hourData,
            data: [
              { x: 0, y: e.data.viewHoursConfirm[0] },
              { x: 0, y: e.data.viewHoursConfirm[1] },
              { x: 0, y: e.data.viewHoursConfirm[2] },
              { x: 0, y: e.data.viewHoursConfirm[3] },
              { x: 0, y: e.data.viewHoursConfirm[4] },
              { x: 0, y: e.data.viewHoursConfirm[5] },
              { x: 0, y: e.data.viewHoursConfirm[6] },
              { x: 0, y: e.data.viewHoursConfirm[7] },
              { x: 0, y: e.data.viewHoursConfirm[8] },
              { x: 0, y: e.data.viewHoursConfirm[9] },
              { x: 0, y: e.data.viewHoursConfirm[10] },
              { x: 0, y: e.data.viewHoursConfirm[11] },
              { x: 0, y: e.data.viewHoursConfirm[12] },
              { x: 0, y: e.data.viewHoursConfirm[13] },
              { x: 0, y: e.data.viewHoursConfirm[14] },
              { x: 0, y: e.data.viewHoursConfirm[15] },
              { x: 0, y: e.data.viewHoursConfirm[16] },
              { x: 0, y: e.data.viewHoursConfirm[17] },
              { x: 0, y: e.data.viewHoursConfirm[18] },
              { x: 0, y: e.data.viewHoursConfirm[19] },
              { x: 0, y: e.data.viewHoursConfirm[20] },
              { x: 0, y: e.data.viewHoursConfirm[21] },
              { x: 0, y: e.data.viewHoursConfirm[22] },
              { x: 0, y: e.data.viewHoursConfirm[23] },
            ],
          });
        })
        .catch((err) => {
          console.log("deu erro");
          setHourData({});
        });
      axios
        .get(
          `http://localhost:3003/dashboardconfirmPresenceCity/${location.state.id}`
        )
        .then((e) => {
          // console.log(e);
          setCitiesData({
            ...citiesData,
            data: [
              { x: 0, y: e.data.viewCityConfirm[0] },
              { x: 0, y: e.data.viewCityConfirm[1] },
              { x: 0, y: e.data.viewCityConfirm[2] },
              { x: 0, y: 18 },
              { x: 0, y: e.data.viewCityConfirm[4] },
              { x: 0, y: e.data.viewCityConfirm[5] },
              { x: 0, y: e.data.viewCityConfirm[6] },
              { x: 0, y: e.data.viewCityConfirm[7] },
              { x: 0, y: e.data.viewCityConfirm[8] },
              { x: 0, y: e.data.viewCityConfirm[9] },
            ],
          });
        })
        .catch((err) => {
          console.log("deu erro");
          setCitiesData({});
        });
    }
  }, [option, dataTrigger]);

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
        text: chart.title,
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

  const labels = chart.labels;
  const data = {
    labels,
    datasets: [
      {
        data: chart.data,
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
        <img
          src={`data:image/png;base64,${localStorage.getItem("user_image")}`}
          width={130}
          className="absolute rounded-full right-36 top-6"
        />
        <div className="flex items-center">
          <FaCalendarAlt size={30} color="#E579FF" />
          <h1 className="mx-4 text-4xl font-bold text-yellow-500">
            {eventData.name}
          </h1>
          <FaStarHalfAlt size={30} color="#C864E0" />
          <span className="ml-2 text-2xl text-white">4,2</span>
        </div>
        <div className="flex mt-20">
          <div>
            {/* <SideNavbar /> */}
            <DataBoxes
              dataTrigger={dataTrigger}
              setDataTrigger={setDataTrigger}
              setChart={setChart}
              citiesData={citiesData}
              setOption={setOption}
              id={id_event}
            />
            <RateButtons
              citiesData={citiesData}
              hourData={hourData}
              weekData={weekData}
              setChart={setChart}
              option={option}
              setOption={setOption}
              chart={chart}
            />
            <div className="p-5 bg-black border-2 border-purple-500 bg-opacity-60 rounded-[2rem] mt-6">
              <Bar options={options} data={data} width={700} height={300} />
            </div>
          </div>
          <div className="mt-auto">
            <Comments id={id_event} />
          </div>
        </div>
      </div>
    </main>
  );
}
