import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    qauntity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.qauntity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qauntity;
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
