import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value); // Call onSearch with the input value
  };

  return (
    <input
      type="text"
      placeholder="Search transactions"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
