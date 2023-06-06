import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/Auth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const { email, formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const onExit = () => {
    navigate("/");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login({
      email,
    });
    navigate("/", {
      replace: false
    })
  };

  return (
    <div className="grid grid-cols-2 mt-16 mx-auto mb-0 w-1/2 alto border-gray-400 border rounded animate__animated animate__fadeIn">
      <div className="info animate__animated animate__fadeIn">
        <div className="grid items-center mx-24">
          <p className="block text-white text-5xl font-bold mt-24">
            Inicia Sesion para ver los eventos
          </p>
          <p className="block text-white mt-4">
            Explore and discover art, become a better artist , connect with
            others over mutual hobbies, or buy and sell work - you can do it all
            here.
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center text-center animate__animated animate__fadeInLeft">
        <form onSubmit={onResetForm}>
          <p className="text-4xl mb-8">Iniciar Sesion</p>

          <label className="mb-1 font-bold text-xs block">Correo</label>
          <input
            name="email"
            type="email"
            placeholder="Correo"
            className="w-3/4 p-4 border-solid rounded border-gray-300 border bg-white mb-8 outline-none"
            onChange={(e) => onInputChange(e)}
            value={formState.email}
          />

          <label className="mb-1 font-bold text-xs block">Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="w-3/4 p-4 border-solid rounded border-gray-300 border bg-white mb-8 outline-none"
            onChange={(e) => onInputChange(e)}
            value={formState.password}
          />

          <input
            type="submit"
            className="w-4/5 p-4 bg-blue-600 border-none rounded-md text-white font-bold mt-10 cursor-pointer"
            onClick={onSubmit}
          />

          <button
            className="w-4/5 p-4 bg-red-600 border-none rounded-md text-white font-bold mt-10 cursor-pointer"
            onClick={onExit}
          >
            Ir a inicio
          </button>
        </form>
      </div>
    </div>
  );
};
