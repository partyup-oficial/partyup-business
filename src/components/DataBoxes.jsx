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
  const [likes, setLikes] = useState(0);
  const [presences, setPresences] = useState(0);
  const [accesses, setAccesses] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3003/likeCount/${id}`).then((e) => {
      setLikes(e.data.numberLikes);
    });
    axios.get(`http://localhost:3003/presenceCount/${id}`).then((e) => {
      setPresences(e.data.numberPresence);
    });
    axios.get(`http://localhost:3003/dashboarCountAcess/${id}`).then((e) => {
      setAccesses(e.data.results[0].count);
    });
  }, []);
  return (
    <div className="flex justify-center gap-16 mb-12">
      <button
        onClick={() => {
          setDataTrigger("likes");
          setOption("");
        }}
        className={`flex flex-col items-center px-6 py-6 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "likes" && "!border-pink-700"
        }`}>
        <FaHeart size={40} color="#bf5993" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
        <span className="font-bold text-green-400">{likes}</span>
      </button>
      <button
        onClick={() => {
          setDataTrigger("presencas");
          setOption("");
        }}
        className={`flex flex-col items-center px-6 py-4 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "presencas" && "!border-pink-700"
        }`}>
        <FaListCheck size={40} color="#7F358D" />
        <h1 className="py-2 m-auto font-bold text-center text-white">
          Presenças <br /> confirmadas
        </h1>
        <span className="font-bold text-green-400">{presences}</span>
      </button>
      <button
        onClick={() => {
          setDataTrigger("access");
          setOption("");
        }}
        className={`flex flex-col items-center px-6 py-6 bg-black border-2 border-purple-900 w-44 bg-opacity-80 rounded-xl ${
          dataTrigger === "access" && "!border-pink-700"
        }`}>
        <FaShare size={40} color="#F88B4B" />
        <h1 className="m-auto font-bold text-white">Acessos</h1>
        <span className="font-bold text-green-400">{accesses}</span>
      </button>
    </div>
  );
}
