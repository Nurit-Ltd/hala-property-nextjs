import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EstimatedChart = () => {
  // Data for the line chart
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        data: [200000, 200100, 400000, 400200, 400300, 600000, 800000],
        fill: false,
        borderColor: "#0954E5",
        tension: 0.1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        yAlign: "bottom",
        callbacks: {
          title: function (tooltipItem) {
            return "Year " + tooltipItem[0].label; 
          },
          label: function (tooltipItem) {
            return "AED " + tooltipItem.raw.toLocaleString();
          },
        },
        backgroundColor: "#101828",
        padding: {
          x: 8,
          y: 4,
        },
        cornerRadius: 8,
        bodyFont: {
          size: 12,
          weight: "normal",
          family: "Arial",
        },
        titleFont: {
          size: 12,
          weight: "bold",
          family: "Arial",
        },
        bodyColor: "#fff",
        titleColor: "#fff",
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200000,
          callback: function (value) {
            return value / 1000 + "k";
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "290px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default EstimatedChart;
