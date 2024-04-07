import { createSlice } from "@reduxjs/toolkit";



const wishslice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addwishlist:(state,action)=>{
            const existingproduct=state.wishlist.find(item=>item.id==action.payload.id)
            if(existingproduct){
                alert("product is already exist in wishlist")
            }
            else{
            state.wishlist.push(action.payload)
            alert("successfully added to wishlist")
            }
        },
        removeFromWishlist:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addwishlist,removeFromWishlist}=wishslice.actions
export default wishslice.reducer
