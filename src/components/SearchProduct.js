import React, { useState } from 'react';
import axios from 'axios';

const SearchProduct = ({ setProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    axios.get(`/api/products/search/${searchTerm}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Product"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchProduct;
