import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, productToAdd);
  // find if cartitems contains products to add
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new arrway with modified cartItems / new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(CartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
