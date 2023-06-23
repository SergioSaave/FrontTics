import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const GASSENSE_ENDPOINT = "http://192.168.18.50:4000/sensors";

const fechaDeAyer = () => {
  const hoy = new Date();
  const DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
  const actual = new Date(hoy.getTime()).toLocaleDateString();
  const uno = new Date(
    hoy.getTime() - DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const dos = new Date(
    hoy.getTime() - 2 * DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const tres = new Date(
    hoy.getTime() - 3 * DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const cuatro = new Date(
    hoy.getTime() - 4 * DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const cinco = new Date(
    hoy.getTime() - 5 * DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const seis = new Date(
    hoy.getTime() - 6 * DIA_EN_MILISEGUNDOS
  ).toLocaleDateString();
  const ultimosSieteDias = [seis, cinco, cuatro, tres, dos, uno, actual];
  return ultimosSieteDias;
};

export const MiSensorPage = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Gas",
      data: [],
    },
    {
      name: "Humo",
      data: [],
    },
    {
      name: "Temperatura",
      data: [],
    },
  ]);

  useEffect(() => {
    fetch(GASSENSE_ENDPOINT)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setOptions({
          ...options,
          xaxis: {
            type: "datetime",
            categories: fechaDeAyer(),
          },
        });
        setSeries(result.series);
      });
  }, []);

  return (
    <div className="app animate__animated animate__fadeInRight">
      <div className="flex flex-col w-full justify-center mx-8 my-4  animate__animated animate__fadeInLeft">
        <h1 className="text-black text-3xl font-bold">Monitor de GasSense</h1>
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" width="800" />
        </div>
      </div>
    </div>
  );
};
