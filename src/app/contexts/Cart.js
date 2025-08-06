"use client";
import { createContext, useState } from "react";

const CartContext = createContext();

const Cartprovider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);
    if (exist) {
      const updatedCart = cart.map((item) => {
        if (cart._id === exist._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }
  };
  const updateQuantity = (id, quantity) => {
    const updateCart = cart.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: quantity };
      }
    });
    setCart(updateCart);
  };
  const removeFromCart = (id) => {
    const removedUpdateCart = cart.filter((item) => item._id !== id);
    setCart(removedUpdateCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const ctxValue = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default Cartprovider;
