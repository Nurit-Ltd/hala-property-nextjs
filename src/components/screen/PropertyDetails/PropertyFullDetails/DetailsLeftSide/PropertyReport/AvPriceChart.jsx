"use client";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AvPriceChart = () => {
  const data = {
    labels: ["Avg. price/sqft", "Asking price"],
    datasets: [
      {
        label: "Solve",
        data: [5500, 4500],
        borderColor: ["#F3980E", "#0954E5"],
        backgroundColor: ["#F3980E", "#0954E5"],
        borderWidth: 1,
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#323B49",
          font: {
            size: 14,
          },
          weight: "bold",
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "270px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AvPriceChart;
