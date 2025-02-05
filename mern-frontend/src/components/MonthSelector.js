import React from 'react';

const MonthSelector = ({ selectedMonth, handleMonthChange }) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="mb-3">
            <label>Select Month:</label>
            <select className="form-select" value={selectedMonth} onChange={handleMonthChange}>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                ))}
            </select>
        </div>
    );
};

export default MonthSelector;
