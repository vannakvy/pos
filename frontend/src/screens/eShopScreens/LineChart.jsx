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
              label: "# of Puchase",
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
            },
            {
              label: "# of Income",
              data: [12, 29, 3, 54, 2, 33, 12, 19, 34, 5, 2, 63],
              backgroundColor: ["yellow"],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 3,
            },
            {
              label: "# of Sales",
              data: [12, 1, 3, 5, 20, 3, 12, 12, 3, 5, 22, 30],
              backgroundColor: ["purple"],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
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
              fontSize: 20,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
