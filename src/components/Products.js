import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = ({ setSelectedProduct, refreshProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`)
      .then(response => {
        console.log(response.data);
        refreshProducts();
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
