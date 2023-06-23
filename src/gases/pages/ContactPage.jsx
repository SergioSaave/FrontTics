import React from "react";

export const ContactPage = () => {
  return (
    <>
      <div class="w-full max-w-xs mx-auto my-32 animate__animated animate__fadeInDown">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Nombre
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Mensaje
            </label>
            <input
              class="shadow appearance-none border rounded w-full h-28 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              placeholder="Mensaje"
            />
            <p class="mt-4 text-blue-500 text-xs italic">Dejanos un comentario!</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Enviar
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 GasSense. All rights reserved.
        </p>
      </div>
    </>
  );
};
