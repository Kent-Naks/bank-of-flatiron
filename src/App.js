import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? 'gray' : '#1c1c1c';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
        <div className="header-buttons">
          <button>Login</button>
          <button>Logout</button>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </header>
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable 
        transactions={filteredTransactions} 
        onSort={sortTransactions}
        onDelete={deleteTransaction} 
      />
      <footer className="footer">
        <p>Contact List: 0726699291</p>
        <p>Email: <a href="mailto:BankofFlatiron@gmail.com">BankofFlatiron@gmail.com</a></p>
        <p><a href="#">Career</a></p>
      </footer>
    </div>
  );
}

export default App;
