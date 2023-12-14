import { createSlice } from "@reduxjs/toolkit";
const name = localStorage.getItem('name');
const initialState = {
  count: 0,
  addproduct: [],
  logstatus:name  
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
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.addproduct];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } 

      return {
        ...state,
        addproduct: newBasket,
        count :state.count - action.payload.price
      };
    },
    loginStatus:(state,action)=>{
      state.logstatus=action.payload
    },
    logout:(state,action)=>{
      // state.count=0
      return{
        addproduct:[],
        count: 0,
        logstatus:""
      }
    }
  },
});

export default containerSlice.reducer;
export const { addItem, removeItem ,loginStatus,logout} = containerSlice.actions;
