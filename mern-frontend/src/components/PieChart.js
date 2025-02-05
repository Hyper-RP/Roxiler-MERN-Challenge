import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

// Registering required components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieChart = ({ selectedMonth }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchPieChartData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/piechart', {
                    params: { month: selectedMonth }
                });

                const labels = response.data.map(item => item._id);
                const data = response.data.map(item => item.itemCount);

                setChartData({
                    labels,
                    datasets: [{
                        label: 'Items per Category',
                        data: data,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#2ECC71']
                    }]
                });
            } catch (error) {
                console.error('Error fetching pie chart data:', error);
            }
        };

        fetchPieChartData();
    }, [selectedMonth]);

    return (
        <div style={{ width: '500px', height: '500px',marginTop:'5rem',marginLeft:'25rem' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
            <h2 style={{marginLeft:'-70rem'}}>Pie Chart</h2>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
