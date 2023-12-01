import { FaHeart, FaShare } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

export default function DataBoxes() {
  return (
    <div className="flex justify-center gap-16 mb-12">
      <div className="flex flex-col items-center gap-2 px-12 py-6 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaHeart size={80} color="#bf5993" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
      </div>
      <div className="flex flex-col items-center px-12 py-6 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaListCheck size={80} color="#7F358D" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
      </div>
      <div className="flex flex-col items-center px-12 py-6 bg-black border-2 border-purple-900 bg-opacity-80 rounded-xl">
        <FaShare size={80} color="#F88B4B" />
        <h1 className="m-auto font-bold text-white">Qtd. de likes</h1>
      </div>
    </div>
  );
}
