import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import SearchProduct from './components/SearchProduct';

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Inventory Management System</h1>
            </header>
            <main>
                <ProductForm onAdd={addProduct} />
                <SearchProduct />
                <Products />
            </main>
        </div>
    );
}

export default App;