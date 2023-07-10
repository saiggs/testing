
import { CartContext } from './CartContext';
import React, { useContext } from 'react';
import './Cart.css';



const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
