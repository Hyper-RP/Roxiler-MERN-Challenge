import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = ({ selectedMonth }) => {
    const [stats, setStats] = useState({ totalSalesAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

    const fetchStatistics = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/statistics', {
                params: { month: selectedMonth }
            });
            setStats(response.data);
        } catch (error) {
            console.error("Error fetching statistics:", error);
        }
    };

    useEffect(() => {
        fetchStatistics();
    }, [selectedMonth]);

    return (
        <div>
            <h2>Statistics</h2>
            <div className="d-flex justify-content-between">
                <div>Total Sales Amount: <strong>${stats.totalSalesAmount}</strong></div>
                <div>Sold Items: <strong>{stats.totalSoldItems}</strong></div>
                <div>Not Sold Items: <strong>{stats.totalNotSoldItems}</strong></div>
            </div>
        </div>
    );
};

export default Statistics;
