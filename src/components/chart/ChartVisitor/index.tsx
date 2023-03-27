import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartVisitor(props?: any) {
  const [chartData, setChartData] = useState<any>({
    options: {
      chart: {
        id: "sparkline1",
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
        },
        // sparkline: {
        //   enabled: true,
        // },
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Visitor Information",
        align: "center",
        style: {
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Poppins",
          color: "#263238",
        },
      },
      colors: [props.colors || "red"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0,
          stops: [100, 100],
        },
      },
      xaxis: {
        categories: props.month
          ? props.month
          : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      },
    },
    series: [
      {
        name: "Series A",
        data: props.data ? props.data : [30, 40, 25, 50, 49, 21, 70, 51],
      },
    ],
  });
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={400}
    />
  );
}
