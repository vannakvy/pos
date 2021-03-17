import React from "react";
import { Scatter } from "@reactchartjs/react-chart.js";

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: "A dataset",
      data: [
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
      ],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ScatterChart = () => (
  <div className="card">
    <h5>Sales </h5>
    <Scatter data={data} options={options} />
  </div>
);

export default ScatterChart;
