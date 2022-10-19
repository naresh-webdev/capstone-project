import { createContext, useEffect, useState, useReducer } from "react";

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

export const CART_ACTION_TYPES = {
  IS_CART_OPEN: "IS_CART_OPEN",
  SET_CART_ITEM: "SET_CART_ITEM",
};

// ? Reducer function
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhadled type ${type} in cartReducers`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  CartItems: [],
  cartCountItem: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen }, dispatchisCartOpen] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (booleanValue) => {
    dispatchisCartOpen({
      type: CART_ACTION_TYPES.IS_CART_OPEN,
      payload: booleanValue,
    });
  };

  const [{ CartItems, cartCountItem, totalPrice }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newcartItems) => {
    // generating a new cartCount
    const newCartCountItem = CartItems.reduce(
      (total, newcartItems) => total + newcartItems.quantity,
      0
    );
    // generating total price
    const totalAmount = newcartItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );

    dispatch({
      type: "SET_CART_ITEM",
      payload: {
        CartItems: newcartItems,
        cartCountItem: newCartCountItem,
        totalPrice: totalAmount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(CartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (productToRemove, defaultRemove = false) => {
    const newCartItems = removeCartItem(
      CartItems,
      productToRemove,
      defaultRemove
    );
    updateCartItemsReducer(newCartItems);
  };

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
