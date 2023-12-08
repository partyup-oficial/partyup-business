export default function RateButtons({
  citiesData,
  hourData,
  weekData,
  setBtn,
  btn,
}) {
  return (
    <div className="flex justify-center gap-8 text-lg font-normal text-white">
      <button
        onClick={() => setBtn(citiesData)}
        className={`${
          btn == citiesData
            ? "!bg-[#a32ea5]"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}>
        Cidades
      </button>
      <button
        onClick={() => setBtn(hourData)}
        className={`${
          btn === hourData
            ? "!bg-[#a32ea5]"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}>
        Horários
      </button>
      <button
        onClick={() => setBtn(weekData)}
        className={`${
          btn === weekData
            ? "!bg-[#a32ea5]"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}>
        Dias da semana
      </button>
    </div>
  );
}
