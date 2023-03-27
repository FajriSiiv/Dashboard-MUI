import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function AreaChart(props?: any) {
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
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      markers: {
        size: 0,
      },
      stroke: {
        curve: "smooth",
      },
      colors: [props.colors || "#dce6ec"],

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
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
      height={150}
    />
  );
}
