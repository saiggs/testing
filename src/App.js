import React, { useState } from 'react';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import LoginForm from './components/Loginforms';

import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';



const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
    <div>
      <Header />
      <LoginForm />
      <SearchBar onSearch={handleSearch} /> 
      <ProductList searchQuery={searchQuery} />
      <ShoppingCart />
    </div>
  </CartProvider>
  );
};

export default App;
