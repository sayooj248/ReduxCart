import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name: 'cart',
    initialState:[],
    reducers:{

        addToCart:(state,action)=>{
            const existingproduct=state.find(item=>item.id==action.payload.id)
            if(existingproduct){
                state=state.filter(item=>item.id!=existingproduct.id)
                existingproduct.quantity++
                state.push(existingproduct)
            }
            else{
                state.push({...action.payload,quantity:1})

            }
            alert("item add to cart")
        },
        removeFromCart :(state,action)=>{
         return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            state=[]
            return state
        },

        incQuandity:(state,action)=>{
            const existingproduct=state.find(item=>item.id==action.payload)
            existingproduct.quantity++
            state=state.filter(item=>item.id!=existingproduct.id)
            state.push(existingproduct)
        },

        decQuandity:(state,action)=>{
            const existingproduct=state.find(item=>item.id==action.payload)
            existingproduct.quantity--
            state=state.filter(item=>item.id!=existingproduct.id)
            state.push(existingproduct)

        }
    }
})

export const {addToCart,removeFromCart,emptyCart,incQuandity,decQuandity}=cartslice.actions
export default cartslice.reducer
