import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  totalPrice: null,
};

export const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = {
        id: action.payload.id,
        Name: action.payload.name,
        imageId: action.payload.imageId,
        price: action.payload.price,
        quantity: action.payload.quantity,
      };
      state.items.push(item);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
    increaseItem: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      } else {
        console.log("you can delete");
      }
    },
    totalPrize: (state) => {
      state.totalPrice = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
});

export const { addItem, removeItem, increaseItem, decreaseItem, totalPrize } =
  cartSlice.actions;
export default cartSlice.reducer;

// console.log("cartSlice.actions");
