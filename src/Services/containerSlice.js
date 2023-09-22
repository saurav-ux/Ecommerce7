import { createSlice} from "@reduxjs/toolkit";

const initialState={
    count:0,
    addproduct: []
}
const containerSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        totalCost:(state,action)=>{
            state.count=state.count+action.payload.price;
        },
        addItem:(state,action)=>{
            return{
                ...state,
                addproduct: [...state.addproduct,action.payload],
            }
        }
        
    }
})

export default containerSlice.reducer
export const {totalCost,addItem}= containerSlice.actions