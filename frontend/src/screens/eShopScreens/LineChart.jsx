import React from "react";
import { Line, defaults } from "react-chartjs-2";
const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          fill: false,
          labels: [
            "January",
            "February",
            "Much",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "Octuber",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "# of Sale",
              data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
              backgroundColor: ["none"],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 2,
              fill: false,
              borderColor:"green"
            },
            {
              label: "# Purchase",
              data: [12, 29, 3, 35, 2, 33, 12, 19, 34, 5, 2,30],
              backgroundColor: ["yellow"],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 2,
              fill: false,
              borderColor:"rgba(255, 159, 64, 1)",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 17,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
