import React from 'react';

const SearchProduct = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search product by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchProduct;
