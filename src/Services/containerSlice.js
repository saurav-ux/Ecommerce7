import { createSlice} from "@reduxjs/toolkit";

const initialState={
    count:0
}
const containerSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        totalCost:(state,action)=>{
            state.count=state.count+action.payload;
        }
    }
})

export default containerSlice.reducer
export const {totalCost}= containerSlice.actions