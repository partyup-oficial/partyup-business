import axios from "axios";
import Foto from "../assets/images/foto.png";
import { useEffect, useState } from "react";
export default function Comments(id) {
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/viewComment/${id.id}`)
      .then((e) => {
        console.log(e);
        const getComments = e.data.results.map((e) => ({
          comment: e.Info_content,
          image: e.User_image,
          name: e.User_name,
        }));
        setComments(getComments);
      })
      .catch((err) => {
        console.log(err);
        setNoComments(true);
      });
  }, []);
  return (
    <div className="flex flex-col text-white bg-[#421657] pb-5 ml-12 -mr-28 rounded-2xl">
      <h1 className="py-2 m-auto text-2xl font-bold">Comentários</h1>
      <div className="flex flex-col gap-12 h-[30rem] overflow-scroll overflow-x-hidden custom-scroll border-t border-purple-800 pt-5">
        {
          // Array(8)
          // .fill("")
          !noComments ? (
            comments.map((e, i) => (
              <div key={i} className="flex gap-5 px-4">
                <img src={Foto} width={65} className="m-auto rounded-full" />
                <div className="flex flex-col max-w-[18rem] w-[20rem]">
                  <h1 className="font-bold">{e.name}</h1>
                  <p className="text-sm break-words">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat, asperiores at deleniti autem similique.
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-5 px-4">
              <div className="flex flex-col max-w-[18rem] w-[20rem]">
                <p className="text-lg break-words m-auto">
                  Nenhum comentário realizado.
                </p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
