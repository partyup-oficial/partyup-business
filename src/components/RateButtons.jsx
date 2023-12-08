export default function RateButtons({
  citiesData,
  hourData,
  weekData,
  setChart,
  chart,
  option,
  setOption,
}) {
  return (
    <div className="flex justify-center gap-8 text-lg font-normal text-white">
      <button
        onClick={() => {
          setChart(citiesData);
          setOption("cities")
        }}
        className={`${
          option === "cities"
            ? "!bg-[#a32ea5] border border-transparent"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}
      >
        Cidades
      </button>
      <button
        onClick={() => {
          setChart(hourData);
          setOption("hours")
        }}
        className={`${
          option === "hours"
            ? "!bg-[#a32ea5] border border-transparent"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}
      >
        Horários
      </button>
      <button
        onClick={() => {
          setChart(weekData);
          setOption("weeks")
        }}
        className={`${
          option === "weeks"
            ? "!bg-[#a32ea5] border border-transparent"
            : "bg-[#611f62] border border-[#E579FF]"
        } rounded-3xl px-8 py-2 hover:bg-[#611f62] transition-colors`}
      >
        Dias da semana
      </button>
    </div>
  );
}
