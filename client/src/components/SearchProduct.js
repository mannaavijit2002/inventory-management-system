import React, { useState } from 'react';
import axios from 'axios';

const SearchProduct = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:5001/products/search?name=${query}`)
            .then(response => setResults(response.data))
            .catch(error => console.error('Error searching products:', error));
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search product by name" 
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map(product => (
                    <li key={product._id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchProduct;
