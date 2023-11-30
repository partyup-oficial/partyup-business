import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="w-full bg-transparent">
      <div className="flex justify-end">
        <button className="px-5 py-2 rounded-xl bg-[#460267] shadow-black text-white">
          Nosso App
        </button>
        <button className="text-white">Planos</button>
        <img src={Logo} width={60} />
      </div>
    </div>
  );
}
