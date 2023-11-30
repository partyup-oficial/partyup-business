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
        position: "top",
        labels: {
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: true,
        text: "Curtidas",
      },
    },
    layout: {
      padding: 0,
    },
    scales: {
      y: {
        suggestedMin: 0,
      },
    },
  };

  const labels = ["12:00", "13:00", "14:00", "15:00", "16:00"];

  const data = {
    labels,
    datasets: [
      {
        label: "Curtidas",
        data: [
          { x: 10, y: 20 },
          { x: 10, y: 20 },
          { x: 20, y: 15 },
          { x: 10, y: 20 },
        ],
        backgroundColor: "#F72A8E",
      },
    ],
  };
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#2A0127]">
      <div className="p-10 bg-black bg-opacity-20">
        <Bar options={options} data={data} width={500} height={300} />
      </div>
    </main>
  );
}
