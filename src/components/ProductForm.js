import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ selectedProduct, refreshProducts }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    supplier: '',
    sales: 0,
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (product._id) {
      // Update product
      axios.put(`/api/products/${product._id}`, product)
        .then(response => {
          console.log(response.data);
          refreshProducts();
          setProduct({ name: '', description: '', supplier: '', sales: 0, price: 0, quantity: 0 });
        })
        .catch(error => console.error(error));
    } else {
      // Create new product
      axios.post('/api/products', product)
        .then(response => {
          console.log(response.data);
          refreshProducts();
          setProduct({ name: '', description: '', supplier: '', sales: 0, price: 0, quantity: 0 });
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={product.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="supplier"
        placeholder="Supplier"
        value={product.supplier}
        onChange={handleChange}
      />
      <input
        type="number"
        name="sales"
        placeholder="Sales"
        value={product.sales}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={product.quantity}
        onChange={handleChange}
      />
      <button type="submit">{product._id ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;
