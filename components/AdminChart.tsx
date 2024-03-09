import { useState, useEffect } from 'react';

import { Bar } from 'react-chartjs-2';
import {
  Cha  rt as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ToolTip,
  Legend
} from 'react-chartjs-2'

const AdminChart = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ['Sun', 'Mon', 'Tue', 'Wed','Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Sales $',
          data: [15234, 224382, 19245, 16243, 28356, 14235, 31000],
          borderColor: 'rgb(52, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235, 0.4)'
        }
      ]
    })

    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      Responsive: true
    })
  }, [])

  return (
    <div>AdminChart</div>
  )
}

export default AdminChart