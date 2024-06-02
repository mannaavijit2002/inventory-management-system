import React, { useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import SearchProduct from './components/SearchProduct';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      <ProductForm selectedProduct={selectedProduct} refreshProducts={refreshProducts} />
      <SearchProduct setProducts={setProducts} />
      <Products setSelectedProduct={setSelectedProduct} refreshProducts={refreshProducts} />
    </div>
  );
};

export default App;
