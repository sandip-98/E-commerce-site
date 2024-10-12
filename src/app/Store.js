import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/productSlice'
import product2Reducer from '../feature/product2Slice'
import cartReducer from '../feature/cartSlice'





export const store = configureStore({
    reducer:{
        product:productReducer,
        product2:product2Reducer,
        cartItem:cartReducer,
  }
})
