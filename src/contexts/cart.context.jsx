import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (
  cartItems,
  productToRemove,
  defaultRemove = false
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1 || defaultRemove) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id && productToRemove.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCountItem: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCountItem, setCartCountItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(CartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove, defaultRemove = false) => {
    setCartItems(removeCartItem(CartItems, productToRemove, defaultRemove));
  };

  useEffect(() => {
    const newCartCountItem = CartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCountItem(newCartCountItem);
  }, [CartItems]);

  useEffect(() => {
    const totalAmount = CartItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    setTotalPrice(totalAmount);
  }, [CartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    addItemToCart,
    cartCountItem,
    removeItemToCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
