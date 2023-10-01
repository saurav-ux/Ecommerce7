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
        },
        removeItem:(state,action)=>{
            console.log("action.payload",action.payload)
           const index = state.addproduct.findIndex(

            (basketItem)=>basketItem.id === action.payload
           )
          let newBasket = [...state.addproduct]
           if(index>=0){
               newBasket.splice(index,1)
           }
           else{
            alert("Cant remove product")
           }
         
                return{
                    ...state,
                    addproduct:newBasket
                   }

        }
        
    }
})

export default containerSlice.reducer
export const {totalCost,addItem,removeItem}= containerSlice.actions