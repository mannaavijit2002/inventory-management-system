import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/products', { name, price })
            .then(response => {
                onAdd(response.data);
                setName('');
                setPrice('');
            })
            .catch(error => console.error('Error adding product:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
