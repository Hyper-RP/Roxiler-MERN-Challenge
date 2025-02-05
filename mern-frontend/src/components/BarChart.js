import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = ({ selectedMonth }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchBarChartData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/barchart', {
                    params: { month: selectedMonth }
                });

                const labels = Object.keys(response.data);
                const data = Object.values(response.data);

                setChartData({
                    labels,
                    datasets: [{
                        label: 'Items per Price Range',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)'
                    }]
                });
            } catch (error) {
                console.error('Error fetching bar chart data:', error);
            }
        };

        fetchBarChartData();
    }, [selectedMonth]);

    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;
