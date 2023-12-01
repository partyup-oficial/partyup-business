import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import DataBoxes from "../components/DataBoxes";
// import DashNavbar from "../components/DashNavbar";

export default function Dashboard() {
  const [citiesData, setCitiesData] = useState({
    labels: ["Santos", "São Vicente", "Praia Grande"],
    data: [
      { x: 0, y: 185 },
      { x: 0, y: 32 },
      { x: 0, y: 109 },
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
            size: 16,
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
  return (
    <main className="flex justify-center items-center bg-[url('./assets/images/partyup-background.png')] bg-cover bg-no-repeat min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4 bg-[#2A0127] bg-opacity-80 border border-[#E579FF]">
        {/* <DashNavbar /> */}
        <DataBoxes />
        <div className="flex justify-center gap-8 text-2xl font-normal text-white">
          <button
            onClick={() => setBtn(citiesData)}
            className="bg-[#78247A] rounded-3xl px-12 py-2">
            Cidades
          </button>
          <button
            onClick={() => setBtn(hourData)}
            className="bg-[#78247A] rounded-3xl px-12 py-2">
            Horários
          </button>
          <button
            onClick={() => setBtn(weekData)}
            className="bg-[#78247A] rounded-3xl px-12 py-2">
            Dias da semana
          </button>
        </div>
        <div className="p-10 bg-black border-2 border-purple-500 bg-opacity-60 rounded-[3rem]">
          <Bar options={options} data={data} width={600} height={300} />
        </div>
      </div>
    </main>
  );
}
