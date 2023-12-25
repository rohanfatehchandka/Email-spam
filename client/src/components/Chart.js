import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ChartComponent({ graph, total_delay }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Ensure chartRef.current is available before creating the chart
    if (chartRef.current) {
      // Assuming 'graph' is an array of arrays with data [(label, value), ...]
      const labels = graph.map((item) => item[0]);
      const data = graph.map((item) => item[1]);

      const customStyle = {
        backgroundColor: "transparent",
        borderColor: "transparent",
        fontFamily: "Open Sans",
        title: {
          display: true,
          text: "Total Delay is: " + total_delay,
        },
      };

      // Check if a chart already exists
      if (window.myChart) {
        // If yes, clear the existing chart
        window.myChart.data.labels = [];
        window.myChart.data.datasets = [];
        window.myChart.update();
      }

      // Create a new chart
      window.myChart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Delay in seconds",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: {
            x: {
              title: {
                display: true,
                text: "Delay in seconds",
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
          ...customStyle,
        },
      });

      // Cleanup on component unmount
      return () => {
        if (window.myChart) {
          window.myChart.destroy();
        }
      };
    }
  }, [graph, total_delay]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
}

export default ChartComponent;
