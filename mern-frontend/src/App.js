import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import MonthSelector from './components/MonthSelector';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
    const [selectedMonth, setSelectedMonth] = useState('March');

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="container">
            <h1 className="mb-4">Roxiler Transactions Dashboard</h1>
            <MonthSelector selectedMonth={selectedMonth} handleMonthChange={handleMonthChange} />
            <Statistics selectedMonth={selectedMonth} />
            <TransactionsTable selectedMonth={selectedMonth} />
            <BarChart selectedMonth={selectedMonth} />
            <PieChart selectedMonth={selectedMonth} />
        </div>
    );
};

export default App;
