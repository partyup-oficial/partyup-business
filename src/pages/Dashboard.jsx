import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import DashNavbar from "../components/DashNavbar";

export default function Dashboard() {
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
        text: "Curtidas",
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

  const labels = [
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
  ];
  const data = {
    labels,
    datasets: [
      {
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
        backgroundColor: "#F72A8E",
      },
    ],
  };
  return (
    <main className="bg-[url('./assets/images/partyup-background.png')] bg-cover bg-no-repeat">
      <div className="flex justify-center items-center min-h-screen bg-[#2A0127] bg-opacity-70">
        <DashNavbar />
        <div className="p-10 bg-black bg-opacity-60 rounded-xl">
          <Bar options={options} data={data} width={800} height={400} />
        </div>
      </div>
    </main>
  );
}
