import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Get the new item from the action payload
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If it exists, increment the quantity
        existingItem.quantity++;
      } else {
        // If it doesn't exist, add the new item to the cart
        state.items.push({ name, image, cost, quantity: 1 });
      }
      // The new item is added or updated in the cart
    },
    removeItem: (state, action) => {
      
      const itemName = action.payload; // Get the name of the item to be removed from the action payload
      // Filter out the item with the given name from the cart items
      state.items = state.items.filter(item => item.name !== itemName);
      // The item is removed from the cart if it exists

    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get the item name and new quantity from the action payload
      // Find the item in the cart by its name
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If the item exists, update its quantity
        existingItem.quantity = quantity;
      }
      // The item's quantity is updated in the cart if it exists 

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
