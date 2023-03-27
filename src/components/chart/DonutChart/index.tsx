import React from "react";
import Chart from "react-apexcharts";

const GradientDonutChart = (props: any) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 4,
      colors: ["transparent"],
    },
    fill: {
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    labels: props.namaProduct
      ? [props.namaProduct]
      : [
          "Produk A",
          "Produk B",
          "Produk C",
          "Produk D",
          "Produk E",
          "Produk F",
        ],
    colors: ["#FFB64D", "#F27036", "#2D9CDB", "#8FBEFF", "#CDDC39", "#008FFB"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#2d2d2d",
              offsetY: -10,
            },
            value: {
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#2d2d2d",
              offsetY: 8,
            },
            // total: {
            //   show: true,
            //   label: "Total",
            //   fontSize: "22px",
            //   fontFamily: "Helvetica, Arial, sans-serif",
            //   color: "#2d2d2d",
            //   formatter: function (w: any) {
            //     return w.globals.seriesTotals.reduce(({ a, b }: any) => {
            //       return a + b;
            //     }, 0);
            //   },
            // },
          },
        },
      },
    },
  };

  const series = props.data ? props.data : [30, 40, 25, 50, 49, 21];

  return <Chart options={options} series={series} type="donut" height={350} />;
};

export default GradientDonutChart;
