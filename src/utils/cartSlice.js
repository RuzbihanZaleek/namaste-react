const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },

    //originalState = { items: ["pizza"]}
    clearCart: (state) => {
      // console.log(current(state)); ["pizza"]
      // state = [];
      // console.log(current(state)); [] here if we try to mutate the state like this 
      // local var state is [] but the originalState is not empty. It remains same

      // Either mutate the existing state or return a new state
      state.items.length = 0; // or return {items: []}; => originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
 