import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8003/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortTransactions = (key) => {
    const sortedTransactions = [...transactions].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setTransactions(sortedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable 
        transactions={filteredTransactions} 
        onSort={sortTransactions}
        onDelete={deleteTransaction} 
      />
    </div>
  );
}

export default App;



