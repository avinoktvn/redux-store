import { createSlice } from "@reduxjs/toolkit";

// syntax add data
const initialState = {
  cartItems: [],
};

// reducer
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const newItem = action.payload;
      const selectCartIndex = state.cartItems.findIndex((product) => product.id === newItem.id);

      if (selectCartIndex !== -1) {
        state.cartItems[selectCartIndex].quantity += 1;
        state.cartItems[selectCartIndex].totalPrice = state.cartItems[selectCartIndex].quantity * newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemCart: () => {},
  },
});

export const { addItemCart, removeItemCart } = cartSlice.actions;

export default cartSlice;

// selektor
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalItems = (state) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrices = (state) => state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
