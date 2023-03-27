import React from "react";
import Chart from "react-apexcharts";

const StackedColumnChart = (props: any) => {
  const options: any = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: props.tanggal
        ? props.tanggal
        : ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    },
    title: {
      text: "Featured Product",
      align: "center",
      style: {
        fontSize: "17px",
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: "#263238",
      },
    },
    legend: {
      position: "bottom",
    },
    colors: ["#006d77", "#c77dff"],
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = props.data
    ? [
        {
          name: "Laptop",
          data: props.data[0] || [30, 40, 45, 50, 49, 21, 70],
        },
        {
          name: "Smartphone",
          data: props.data[1] || [20, 10, 25, 30, 20, 35, 40],
        },
      ]
    : [
        {
          name: "Laptop",
          data: [30, 40, 45, 50, 49, 21, 70],
        },
        {
          name: "Smartphone",
          data: [20, 10, 25, 30, 20, 35, 40],
        },
      ];
  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default StackedColumnChart;
