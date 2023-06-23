import React from "react";

export const ModosDeUsoPage = () => {
  return (
    <>
      <div className="mt-8 text-justify animate__animated animate__fadeInDown">
        <div className="mb-6">
          <span className="font-bold">1. Monitoreo de calidad del aire:</span>{" "}
          El instrumento de medición de{" "}
          <span className="font-bold">GasSense</span> se puede utilizar para
          monitorear la calidad del aire en diferentes entornos, como edificios,
          fábricas, espacios públicos y áreas residenciales. Esto ayuda a
          identificar y controlar la presencia de gases como el monoxido de
          carbono, gas natural, gas propano, gas butano, entre otros.
        </div>
        <div className="mb-6">
          <span className="font-bold">
            2. Seguridad en el lugar de trabajo:
          </span>{" "}
          En entornos industriales, el instrumento de medición de gas se puede
          utilizar para garantizar la seguridad de los trabajadores o dar cuenta
          de existencia de fugas. Puede detectar la presencia de gases
          inflamables, tóxicos o asfixiantes en el ambiente, lo que permite
          tomar medidas preventivas y de respuesta en caso de fugas o
          condiciones peligrosas.
        </div>
        <div className="mb-6">
          <span className="font-bold">3. Detección de fugas de gas:</span> En
          entornos domésticos, comerciales o industriales donde se utiliza gas
          (como gas natural o propano), el instrumento de medición de{" "}
          <span className="font-bold">GasSense</span> puede utilizarse para
          detectar fugas. Esto es especialmente importante para prevenir
          explosiones, incendios y garantizar la seguridad de las personas que
          se encuentran en el lugar.
        </div>
      </div>
      <div className="mt-6 animate__animated animate__fadeInRight grid grid-cols-2 gap-4">
        <img
          className="rounded-md bg-cover h-60 w-full"
          src="/src/assets/images/prot2.png"
        />
        <img
          className="rounded-md bg-cover h-60 w-full"
          src="/src/assets/images/monitoring.jpeg"
        />
      </div>
    </>
  );
};
