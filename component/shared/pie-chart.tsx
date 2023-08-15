import { useEffect, useRef } from "react";

import ApexCharts from "apexcharts";

export default function PieCharts() {
  var options = {
    labels: ["Civil Service", "Service", "Trading", "IT"],
    series: [44, 55, 41, 17],
    dataLabels: {
      enabled: false,
      show: false,
    },
    chart: {
      width: "100%",
      height: "299px",
      type: "donut",
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        startAngle: -90,
        endAngle: 270,
        donut: {
          dataLabels: {
            show: false,
          },
          labels: {
            show: true,
            total: {
              show: true,

              label: "Top 4 Sector",

              fontSize: "14px",

              color: "#596780",

              formatter: function (value: any) {
                return `$ ${value.globals.seriesTotals.reduce(
                  (a: any, b: any) => a + b,

                  0
                )}`;
              },

              align: "center", // Center align the labels

              offsetX: 0, // Offset in the x-axis (adjust as needed)

              offsetY: 0,
            },
          },
        },
      },
    },
    legend: {
      formatter: function (
        val: string,
        opts: {
          w: { globals: { series: { [x: string]: string } } };
          seriesIndex: string | number;
        }
      ) {
        return val;
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef?.current) {
      var chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, [chartRef?.current]);

  return (
    <div
      className="bg-white dark:bg-[#111c44] rounded-[14px] !max-h-[299px] !min-h-[299px] flex flex-1 items-center justify-center"
      ref={chartRef}
    />
  );
}
