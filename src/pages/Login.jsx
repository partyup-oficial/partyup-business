import { useState } from "react";
import { GoEye, GoEyeClosed, GoLock, GoMail } from "react-icons/go";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Waveform } from "@uiball/loaders";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:3003/loginUser", {
        emailUser: data.email,
        senhaUser: data.pass,
      })
      .then((e) => {
        console.log(e);
        navigate("/eventos");
      })
      .catch((err) => {
        console.log(err);
        setInvalid(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="bg-[url('./assets/images/login-bg.png')] bg-cover bg-no-repeat">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-12 text-xl text-white">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="logo-partyup"
            width={230}
            className="-mb-16"
          />
          <div className="flex p-2 border-b border-white w-[25rem]">
            <GoMail size={30} color="#FFF" />
            <input
              {...register("email")}
              type="text"
              className="w-full px-4"
              placeholder="E-mail"
            />
          </div>
          <div className="flex p-2 border-b border-white w-[25rem]">
            <GoLock size={30} color="#FFF" />
            <input
              {...register("pass")}
              type={pass ? "text" : "password"}
              className="w-full px-4"
              placeholder="Senha"
            />
            <button type="button" onClick={() => setPass(!pass)}>
              {pass ? <GoEyeClosed size={30} /> : <GoEye size={30} />}
            </button>
          </div>
          <button className="px-20 py-3 bg-[#95003F] rounded-xl shadow-2xl">
            {loading ? (
              <Waveform
                size={30}
                lineWeight={4.2}
                color="#3f001a"
                speed={0.8}
              />
            ) : (
              "Entrar"
            )}
          </button>
          {invalid && (
            <span className="-mt-6 text-2xl text-red-700">
              E-mail ou senha incorretos.
            </span>
          )}
        </form>
      </div>
    </main>
  );
}
