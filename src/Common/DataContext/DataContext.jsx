import React, { createContext, useContext, useState } from 'react';

// Create the context object
const DataContext = createContext();

// Create the provider component
const DataProvider = ({ children }) => {
  // Your state and functions go here
  const [cart, setCart] = useState([]);

  const addToCart = (productDetails) => {
    setCart([...cart, { ...productDetails, quantity: 1 }]);
  };
  const updateCartItemQuantity = (productId, updateQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.product_id === productId) {
        // Update the quantity of the specific product
        return { ...item, quantity: item.quantity + updateQuantity };
      }
      return item;
    });
  
    setCart(updatedCart);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.product_id !== productId);
    setCart(updatedCart);
  };

  // Provide the context value
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  // Provide the context value to the descendants
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

// Create a custom hook for using the context
const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within an DataProvider');
  }
  return context;
};

export { DataProvider, useDataContext };
