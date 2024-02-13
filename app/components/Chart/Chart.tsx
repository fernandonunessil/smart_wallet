import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function MyChartComponent({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Ref to hold the chart instance

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy the existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      // Configure your chart here
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: data, // Your data array
            backgroundColor: [
              "rgba(255,   99,   132,   0.2)",
              "rgba(54,   162,   235,   0.2)",
              "rgba(255,   206,   86,   0.2)",
              "rgba(75,   192,   192,   0.2)",
              "rgba(153,   102,   255,   0.2)",
              "rgba(255,   159,   64,   0.2)"
            ],
            borderColor: [
              "rgba(255,   99,   132,   1)",
              "rgba(54,   162,   235,   1)",
              "rgba(255,   206,   86,   1)",
              "rgba(75,   192,   192,   1)",
              "rgba(153,   102,   255,   1)",
              "rgba(255,   159,   64,   1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [data]);

  return <canvas ref={chartRef} />;
}
