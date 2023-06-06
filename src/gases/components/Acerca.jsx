import React from "react";

export const Acerca = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center mx-32 my-12  animate__animated animate__fadeInLeft">
        <h1 className="text-black text-5xl font-bold">Acerca de</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-32 my-12">
        <div className="text-justify animate__animated animate__fadeInDown">
          <div className="mb-6">
            En GasSense, nos dedicamos a brindarte soluciones de seguridad y
            protección para tu hogar o espacio de trabajo. Somos un equipo
            apasionado de expertos en tecnología que se esfuerza por ofrecerte
            productos de calidad y servicios superiores que te proporcionen
            tranquilidad y comodidad en tu día a día. Nuestro enfoque se centra
            en el uso de las últimas tecnologías, y es por eso que hemos
            desarrollado una alarma innovadora que utiliza los sensores{" "}
            <span className="font-bold">MQ6, MQ7 y AM2302</span>. Estos sensores
            especializados nos permiten ofrecerte una solución integral que
            combina detección de gases inflamables, monitoreo de calidad del
            aire, temperatura y humedad, todo en un solo sistema de seguridad.
          </div>
          <div>
            Creemos en la importancia de tu seguridad y bienestar, y es por eso
            que trabajamos arduamente para desarrollar soluciones confiables y
            económicas, brindándote la tranquilidad y la protección que
            necesitas, para que puedas disfrutar de la vida con total confianza
            en tu entorno.
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <img
            className="rounded-md bg-cover h-80 w-full"
            src="/src/assets/images/dangergas.avif"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-32 mb-12">
        <div className="animate__animated animate__fadeInLeft">
          <img
            className="rounded-md bg-cover h-80 w-full"
            src="/src/assets/images/monitoring.jpeg"
          />
        </div>
        <div className="text-justify animate__animated animate__fadeInUp">
          <div className="mb-4">
            Como empresa, proporcionamos soluciones específicas que sean fáciles
            de usar y que se integren perfectamente a cualquier estilo de vida,
            por lo que podrás usar nuestros productos para poder vigilar tanto a
            <span className="font-bold"> niños como a adultos mayores</span> de
            manera fácil y cómoda.
          </div>
          <div className="mb-4">
            También valoramos la importancia de la independencia y la capacidad
            de envejecer en el hogar. Nuestra alarma está diseñada para ayudarte
            a mantener tu{" "}
            <span className="font-bold">autonomía y seguridad</span> en tu
            propio entorno, permitiéndote tomar decisiones informadas y
            ofreciéndote una{" "}
            <span className="font-bold">red de protección confiable.</span>
          </div>
          <div className="mb-4">
            En <span className="font-bold">GasSense</span>, estamos
            comprometidos con estos objetivos y trabajamos arduamente para
            cumplirlos en cada aspecto de nuestro negocio. Creemos que todos
            merecen sentirse seguros y protegidos, tu seguridad y bienestar son
            nuestra motivación diaria.
          </div>
        </div>
      </div>
    </>
  );
};
