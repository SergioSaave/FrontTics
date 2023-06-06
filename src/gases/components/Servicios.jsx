import React from "react";

export const Servicios = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center mx-32 my-12  animate__animated animate__fadeInLeft">
        <h1 className="text-black text-5xl font-bold">Nuestros Servicios</h1>
      </div>

      <div className="flex justify-center mb-48">
        <div className="h-96 grid grid-cols-3 gap-6 justify-between mx-auto">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">Gas</span> (LPG, natural, propano,
              butano)
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg "
              src="src/assets/images/gas.jpg"
              alt="image description"
            />
            <p className="flex text-justify w-96 mt-4">
              Implementamos un sistema de detección de gas altamente sensible y
              confiable utilizando un sensor MQ6. Esto te permite monitorear y
              detectar la presencia de gases inflamables como el gas butano,
              propano y metano, asegurando así un ambiente seguro y libre de
              riesgos de explosiones o fugas peligrosas.
            </p>
          </div>
          <div className="animate__animated animate__fadeInDown">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">Humo</span> (Monoxido de carbono)
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"
              src="src/assets/images/smoke.jpg"
              alt="image description"
            />
            <p className="flex text-justify w-96 mt-4">
              Evaluamos la calidad del aire y detectamos la presencia de
              monóxido de carbono (CO) con un sensor MQ7. El monóxido de carbono
              es un gas tóxico e inodoro que puede ser mortal en altas
              concentraciones. Nuestro servicio de monitoreo continuo te
              alertará de cualquier nivel inusual de CO, permitiéndote tomar
              medidas rápidas para proteger tu salud y la de tus seres queridos.
            </p>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <h1 className="text-bold text-2xl text-center my-2">
              <span className="font-bold">Temperatura</span>
            </h1>
            <img
              className="h-72 w-96 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-lg"
              src="src/assets/images/temperatura.jpg"
              alt="image description"
            />
            <p className="flex text-justify w-96 mt-4">
              Utilizamos el sensor AM2302 para mantenerte informado sobre
              cambios inesperados en la temperatura y la humedad. Si se detectan
              condiciones anormales, recibirás notificaciones en tiempo real a
              través de nuestra aplicación móvil, permitiéndote tomar medidas
              inmediatas para evitar problemas o daños en tu hogar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
