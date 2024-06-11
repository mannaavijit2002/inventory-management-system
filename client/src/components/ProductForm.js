import React, { useState } from 'react';

const ProductForm = ({ fetchProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', supplier: '', sales: 0, price: 0, quantity: 0 });

  const addProduct = () => {
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(() => {
      fetchProducts();
      setNewProduct({ name: '', description: '', supplier: '', sales: 0, price: 0, quantity: 0 });
    })
    .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <input type="text" placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input type="text" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input type="text" placeholder="Supplier" value={newProduct.supplier} onChange={e => setNewProduct({ ...newProduct, supplier: e.target.value })} />
      <input type="number" placeholder="Sales" value={newProduct.sales} onChange={e => setNewProduct({ ...newProduct, sales: parseInt(e.target.value) })} />
      <input type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
      <input type="number" placeholder="Quantity" value={newProduct.quantity} onChange={e => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;