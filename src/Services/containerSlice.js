import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  addproduct: [],
  logstatus:""
};
const containerSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        addproduct: [...state.addproduct, action.payload],
        count :state.count + action.payload.price
      };
    },
    removeItem: (state, action) => {
      // console.log("action.payload",action.payload)
      const index = state.addproduct.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.addproduct];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } 

      return {
        ...state,
        addproduct: newBasket,
      };
    },
    loginStatus:(state,action)=>{
      state.logstatus=action.payload
    }
  },
});

export default containerSlice.reducer;
export const { addItem, removeItem ,loginStatus} = containerSlice.actions;
