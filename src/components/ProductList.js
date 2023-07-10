import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      imageUrl: 'path/to/product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 19.99,
      imageUrl: 'path/to/product2.jpg',
    },
    // Add more product data as needed
  ];

  return (
    <div>
      {products.map((product) => (
  <ProductItem key={product.id} product={product} searchQuery={searchQuery} />
))}

    </div>
  );
};

export default ProductList;
