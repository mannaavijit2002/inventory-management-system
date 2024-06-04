import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (e) => {
    e.preventDefault();
    if (name && price) {
      const newProduct = { name, price: parseFloat(price) };
      setProducts([...products, newProduct]);
      setName('');
      setPrice('');
    }
  };

  const searchProducts = (e) => {
    e.preventDefault();
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Inventory Management System</h1>
      <div className="form">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
        <input
          type="text"
          placeholder="Search product by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchProducts}>Search</button>
      </div>
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product.name} - ${product.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
