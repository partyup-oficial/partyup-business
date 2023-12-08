import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

export default function DataBoxes({
  dataTrigger,
  setDataTrigger,
  chart,
  setChart,
  citiesData,
  setOption,
  id,
}) {
  const [count, setCount] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3003/likeCount/${id}`).then((e) => {
      setCount([{
        ...count,
        likes: e.data.numberLikes,
      }]);
    });
    axios.get(`http://localhost:3003/presenceCount/${id}`).then((e) => {
      setCount([{...count, presences: 12 }]);
    });
    axios.get(`http://localhost:3003/likeCount/${id}`).then((e) => {
      setCount([{
        ...count,
        access: e.data.numberLikes,
      }]);
    });
  }, []);
  return (
    <div className="flex justify-center gap-16 mb-12">
      <button
        onClick={() => {
          setDataTrigger("likes");
          setChart(citiesData);
          setOption("cities");
          console.log(count);
        }}
        className={`flex flex-col items-center px-6 py-6 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "likes" && "!border-pink-700"
        }`}
      >
        <FaHeart size={40} color="#bf5993" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
        <span className="font-bold text-green-400">{count.likes}</span>
      </button>
      <button
        onClick={() => {
          setDataTrigger("presencas");
          setChart(citiesData);
          setOption("cities");
        }}
        className={`flex flex-col items-center px-6 py-4 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "presencas" && "!border-pink-700"
        }`}
      >
        <FaListCheck size={40} color="#7F358D" />
        <h1 className="py-2 m-auto font-bold text-center text-white">
          Presenças <br /> confirmadas
        </h1>
        <span className="font-bold text-green-400">{count.presences}</span>
      </button>
      <button
        onClick={() => {
          setDataTrigger("acessos");
          setChart(citiesData);
          setOption("cities");
        }}
        className={`flex flex-col items-center px-6 py-6 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "acessos" && "!border-pink-700"
        }`}
      >
        <FaShare size={40} color="#F88B4B" />
        <h1 className="m-auto font-bold text-white">Acessos</h1>
        <span className="font-bold text-green-400">{count.access}</span>
      </button>
    </div>
  );
}
