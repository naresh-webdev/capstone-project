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

export const reduceCartItemQuantity = (CartItems, productToReduce) => {
  // find if cartitems contains products to reduce
  const cartItemToReduce = CartItems.find(
    (cartItem) => cartItem.id === productToReduce.id
  );

  if (cartItemToReduce.quantity === 1) {
    return CartItems.filter((cartItem) => cartItem.id !== cartItemToReduce.id);
  }

  return CartItems.map((cartItem) => {
    if (cartItem.id === cartItemToReduce.id && cartItemToReduce.quantity > 1) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};

export const increaseCartItemQuantity = (CartItems, productToIncrease) => {
  // find if cartitems contains products to reduce
  const cartItemToIncrease = CartItems.find(
    (cartItem) => cartItem.id === productToIncrease.id
  );

  if (cartItemToIncrease.quantity === 1) {
    return CartItems.filter((cartItem) => cartItem.id !== productToIncrease.id);
  }

  return CartItems.map((cartItem) => {
    if (
      cartItem.id === productToIncrease.id &&
      productToIncrease.quantity > 1
    ) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    } else {
      return cartItem;
    }
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: () => {},
  cartCountItem: 0,
  reduceCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCountItem, setCartCountItem] = useState(0);

  const reduceCartItem = (productToReduce) => {
    setCartItems(reduceCartItemQuantity(CartItems, productToReduce));
  };

  const increaseCartItem = (productToIncrease) => {
    setCartItems(increaseCartItemQuantity(CartItems, productToIncrease));
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(CartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCountItem = CartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCountItem(newCartCountItem);
  }, [CartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    addItemToCart,
    cartCountItem,
    reduceCartItem,
    increaseCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
