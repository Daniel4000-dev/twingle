"use client";
import { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[][];
    borderColor: string;
    backgroundColor: string;
    barPercentage: number;
  }[];
}

interface ChartOptions {
  plugins: {
    legend: { position: "top" };
    title: { display: true; text: string };
  };
  maintainAspectRatio: boolean;
  responsive: boolean;
}

const AdminChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
   const value1 = [0, 224382, 19245, 16243, 28356, 14235, 31000]
   const value2 = [15234, 224382, 19245, 16243, 28356, 14235, 31000]
   const value3 = [15234, 224382, 19245, 16243, 28356, 14235, 31000]
   const value = [value1, value2]
    setChartData({
      labels: ['Sun', 'Mon AM', 'Mon PM', 'Tues', 'Tues AM', 'Tues PM', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        { // Dataset for Monday with two values
          label: 'Monday Sales',
          data: [value1, value2],
          borderColor: 'rgb(52, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
          barPercentage: 0.6,
        },
        // Include datasets for other days with a single value if needed
        { // Example for Tuesday with a single value
          label: 'Tuesday Expenses',
          data: [value3], // Single value for Tuesday
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 165, 0, 0.4)',
          barPercentage: 0.6,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
        categoryPercentage: 0.6,
        maintainAspectRatio: false,
        responsive: true,
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            beginAtZero: true,
            color: 'lightblue',
            borderDash: [5, 5],
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            beginAtZero: true,
          }
        }
      },
    });
  }, []);

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[52vh] h-[50vh] p-4 rounded-lg bg-white'>
        <Bar key={chartOptions} className='w-full' data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default AdminChart;
