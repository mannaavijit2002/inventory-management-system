import React, { useState } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import SearchProduct from './components/SearchProduct';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Inventory Management System</h1>
      <ProductForm addProduct={addProduct} />
      <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Products</h2>
      <Products products={filteredProducts} />
    </div>
  );
};

export default App;
