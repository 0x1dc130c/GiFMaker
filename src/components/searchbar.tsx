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
      placeholder="🔍ค้นหา"
      value={query}
      onChange={handleInputChange}
      className='border border-gray-300 rounded-md p-2 w-full'
    />
  );
};

export default SearchBar;