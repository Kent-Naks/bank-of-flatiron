import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions, onSort, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Date 
            <button onClick={() => onSort('date')}>Sort</button>
          </th>
          <th>
            Description 
            <button onClick={() => onSort('description')}>Sort</button>
          </th>
          <th>
            Category 
            <button onClick={() => onSort('category')}>Sort</button>
          </th>
          <th>
            Amount 
            <button onClick={() => onSort('amount')}>Sort</button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;

