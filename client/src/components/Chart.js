import React from "react";
import { useEffect } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent ({graph, total_delay}) {
    useEffect(() => {
        // Assuming 'graph' is an array of arrays with data [(label, value), ...]
        const labels = graph.map(item => item[0]);
        const data = graph.map(item => item[1]);
    
        const customStyle = {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          fontFamily: 'Open Sans',
          title: {
            display: true,
            text: 'Total Delay is: ' + total_delay,
          },
        };
    
        const ctx = document.getElementById('myChart');
    
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Delay in seconds',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: 'y',
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Delay in seconds',
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
              },
            },
            ...customStyle,
          },
        });
      }, [graph, total_delay]);
    
      return <canvas id="myChart" width="400" height="200"></canvas>;
};

export default ChartComponent;