import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";


const BarChart = (props) => {

  const newArr = props?.data?.map(item=>item.count)
  const newLabel = props?.data?.map(item=>item._id)
  const data = {
    labels: newLabel,
    datasets: [
      {
        label: props.title,
        data: newArr,
        backgroundColor:props?.bgColor,
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
        borderColor:"#fffff",
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 2,
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
  
  return <>
    <div className="header">
      <p className="title eshop-font h4">{props?.title} </p>
    </div>
    <Bar data={data} options={options} />
  </>
};

export default BarChart;
