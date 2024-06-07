import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', supplier: '', sales: 0, price: 0, quantity: 0 });

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addProduct = () => {
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(product => setProducts([...products, product]))
    .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <button onClick={() => updateProduct(product._id)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Name" onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input type="text" placeholder="Description" onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input type="text" placeholder="Supplier" onChange={e => setNewProduct({ ...newProduct, supplier: e.target.value })} />
      <input type="number" placeholder="Sales" onChange={e => setNewProduct({ ...newProduct, sales: parseInt(e.target.value) })} />
      <input type="number" placeholder="Price" onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
      <input type="number" placeholder="Quantity" onChange={e => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
