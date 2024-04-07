import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 export const fetchProductThank=createAsyncThunk('products/fetchProductThank',async()=>{
   const response=await  axios.get('https://dummyjson.com/products')
   localStorage.setItem("response",JSON.stringify(response.data.products))
   return response.data.products
})


const productslice= createSlice({
     name:'products',
     initialState:{
        product:[],
        loading:false,
        productContainer:[],
        error:'',
        productsPerPage:10,
        currentPage:1

     },
     reducers:{
      searchproduct:(state,action)=>{
         state.product=state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
      },
      onNavigatePrev:(state)=>{
        state.currentPage--
      },
      onNavigateNext:(state)=>{
         state.currentPage++
      }
      
     },

     extraReducers:(builder)=>{
        builder.addCase(fetchProductThank.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchProductThank.fulfilled,(state,action)=>{
            state.loading=false,
            state.product=action.payload
            state.productContainer=action.payload
        }),
         builder.addCase(fetchProductThank.rejected,(state,action)=>{
            state.loading=false
            state.product=[],
            state.error="Request Failed!!"
        })

     }
})

export const {searchproduct,onNavigateNext,onNavigatePrev}=productslice.actions
export default productslice.reducer