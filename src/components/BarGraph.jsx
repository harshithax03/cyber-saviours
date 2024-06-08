import React from 'react'
import {Bar} from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
import { barData } from '../AllData';
const  options = {
    scales: {
        y: {
            position: 'right',
            beginAtZero: true,
        },
        y2: {
            position: 'left',
            beginAtZero: true,
        },
    },
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 15,
                },
            },
        },
    },
};

export const BarGraph = () => {
    
  return (
    <Bar options={options} 
    data={barData} />
  )
}
