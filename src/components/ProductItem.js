import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
    <img src={product.imageUrl} alt={product.title} />

      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
