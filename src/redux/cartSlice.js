import { createSlice } from "@reduxjs/toolkit";


// initialState
const initialState = {
    cartItems:[],
    cartCount : 0 ,
    
}

// reducer 
 export const cartSlice = createSlice({
    name : 'cart' ,
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            state.cartItems.push(action.payload)
            state.cartCount = state.cartCount +1 ;
            
           
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer