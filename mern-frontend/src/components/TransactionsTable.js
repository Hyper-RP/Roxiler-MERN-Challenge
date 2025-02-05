import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsTable = ({ selectedMonth }) => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/transactions', {
                    params: { month: selectedMonth, page, search: searchTerm }
                });

                setTransactions(response.data.transactions);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, 
    [selectedMonth, page, searchTerm]);

    return (
        <div>
            <h2>Transactions</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                style={{width:'100%'}}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Date of Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.price}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default TransactionsTable;
