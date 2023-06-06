import React from "react";

export const Presentacion = () => {
  return (
    <div className="flex flex-col w-full justify-center mx-32 mt-36  animate__animated animate__fadeInLeft">
      <h1 className="text-blue-600">Hola, bienvenido a tu</h1>
      <h1 className="text-black text-8xl font-bold">Sensor de Gases</h1>
      <h1 className="text-gray-500 text-6xl font-bold">
        Para que monitoreen los gases del hogar
      </h1>
      <div className="flex justify-start w-1/2">
        <p className="mt-6 mr-40">
          ¡Protege tu hogar y a tus seres queridos con nuestra alarma! Puedes
          tener la tranquilidad de ser alertado de inmediato ante cualquier
          indicio de fuego y/o fuga de gas con sólo 1 dispositivo. Nuestra
          alarma de inteligente utiliza la tecnología de 3 distintos sensores
          para detectar cualquier anomalía de Temperatura, Gas y Humo,
          garantizando una respuesta rápida y eficiente en caso de emergencia.
          No pongas en riesgo lo más importante para ti e invierte en la
          seguridad de tu hogar con nuestro producto.
        </p>
      </div>
      <button className="w-1/5 my-8 p-2 border-black border-2 text-blue-6 rounded">
        Mira el codigo fuente en Github!
      </button>
    </div>
  );
};
