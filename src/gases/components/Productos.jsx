import React from "react";
import aos from "aos";

aos.init();

export const Productos = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center mx-32 my-12 animate__animated animate__fadeInLeft">
        <h1 data-aos="fade-up" className="text-black text-5xl font-bold">
          Nuestros Productos
        </h1>
      </div>

      <div data-aos="fade-up" className="flex justify-center mb-16">
        <div className="h-96 grid grid-cols-3 gap-6 justify-between mx-auto mb-12">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">GasSense</span> v1 Carlos
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter blur-sm hover:blur-none rounded-lg"
              src="src/assets/images/prot2.png"
              alt="image description"
            />
            <div className="flex justify-around mt-4 border-b-2">
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">Precio: </li>
                  <li className="font-bold text-xl">Capacidad: </li>
                  <li className="font-bold text-xl">Actualizacion: </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">$ 19.990</li>
                  <li className="font-bold text-xl">5 mts&#178;</li>
                  <li className="font-bold text-xl">2 minutos</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="animate__animated animate__fadeInDown">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">GasSense</span> v2 Kerssen
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter blur-sm hover:blur-none rounded-lg"
              src="src/assets/images/prot2.png"
              alt="image description"
            />
            <div className="flex justify-around mt-4 border-b-2">
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">Precio: </li>
                  <li className="font-bold text-xl">Capacidad: </li>
                  <li className="font-bold text-xl">Actualizacion: </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">$ 24.990</li>
                  <li className="font-bold text-xl">10 mts&#178;</li>
                  <li className="font-bold text-xl">1 minutos</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">GasSense</span> v3 Sergio
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter blur-sm hover:blur-none rounded-lg"
              src="src/assets/images/prot2.png"
              alt="image description"
            />
            <div className="flex justify-around mt-4 border-b-2">
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">Precio: </li>
                  <li className="font-bold text-xl">Capacidad: </li>
                  <li className="font-bold text-xl">Actualizacion: </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-bold mb-2 text-2xl">$ 29.990</li>
                  <li className="font-bold text-xl">15 mts&#178;</li>
                  <li className="font-bold text-xl"> Tiempo Real</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};