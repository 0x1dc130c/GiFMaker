"use client";

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="ค้นหา"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;