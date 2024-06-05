import React from 'react';

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name} - ${product.price.toFixed(2)}</li>
      ))}
    </ul>
  );
};

export default Products;