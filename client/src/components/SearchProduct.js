import React from 'react';

const SearchProduct = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Products"
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchProduct;