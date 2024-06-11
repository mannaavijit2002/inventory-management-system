import React, { useEffect, useState } from 'react';

const Products = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  const fetchProducts = () => {
    const url = searchQuery ? `http://localhost:3000/api/products/search?query=${searchQuery}` : 'http://localhost:3000/api/products';
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    })
    .then(() => fetchProducts())
    .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            {/* Add update functionality here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;