import { FaHeart, FaShare } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

export default function DataBoxes() {
  return (
    <div className="flex justify-center gap-16 mb-12">
      <div className="flex flex-col items-center gap-2 px-6 py-4 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaHeart size={40} color="#bf5993" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
        <span className="font-bold text-green-400">132</span>
      </div>
      <div className="flex flex-col items-center px-6 py-4 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaListCheck size={40} color="#7F358D" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
        <span className="font-bold text-green-400">132</span>
      </div>
      <div className="flex flex-col items-center px-6 py-4 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaShare size={40} color="#F88B4B" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
        <span className="font-bold text-green-400">132</span>
      </div>
    </div>
  );
}
