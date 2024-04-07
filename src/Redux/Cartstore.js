import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slice'
import WishlistReducer from './wishslice'
import cartReducer from './Cartslice'



const productstore=configureStore({
    reducer:{
        productReducer,
        WishlistReducer,
        cartReducer

    }
})


export default productstore