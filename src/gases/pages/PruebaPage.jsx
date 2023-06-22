import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const GASSENSE_ENDPOINT = "http://192.168.18.50:4000/gas";

export const PruebaPage = () => {
  const [fact, setFact] = useState([]);

  useEffect(() => {
    fetch(GASSENSE_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setFact(data);
      });
  }, []);

  const state = {
    stroke: {
      curve: 'smooth',
    },
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 24],
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="800"
          />
        </div>
      </div>
    </div>
  );
};
