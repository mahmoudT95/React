import { createSlice , createAsyncThunk } from "@reduxjs/toolkit/dist/createSlice";


const fetchProduct = createAsyncThunk('shop/fetchProduct',()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json));
})

const initialState ={
productsList:[],
loading :false
err : {}
}

const productSlice = createSlice({
    name :'products',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProduct.pending]:(state)=>{
            state.loading = true
        },
        [fetchProduct.fulfilled]:(state ,action)=>{
            state.loading = false
            state.productsList = action.payload
        },
        [fetchProduct.rejected]:(state , action)=>{
            state.loading = false
            state.err = action.payload
        }
    }
})