import Foto from "../assets/images/foto.png";
export default function Comments() {
  return (
    <div className="flex flex-col text-white bg-[#421657] pb-5 ml-12 -mr-28 rounded-2xl">
      <h1 className="py-2 m-auto text-2xl font-bold">Comentários</h1>
      <div className="flex flex-col gap-12 h-[30rem] overflow-scroll overflow-x-hidden custom-scroll border-t border-purple-800 pt-5">
        {Array(8)
          .fill("")
          .map(() => (
            <div className="flex gap-5 px-4">
              <img src={Foto} width={65} className="m-auto rounded-full" />
              <div className="flex flex-col max-w-[18rem] ">
                <h1 className="font-bold">Roberta Pereira</h1>
                <p className="text-sm break-words">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat, asperiores at deleniti autem similique.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
