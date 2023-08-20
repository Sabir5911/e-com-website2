//@ts-nocheck
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../components/sanityfetch";
import { useEffect } from "react";

export interface CartDataType {
items:Array<Product>
totalAmount:number,
totalQuantity:number,

}

const initialState: CartDataType = {
  items:[],
  totalAmount:0,
  totalQuantity:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state:CartDataType, action:PayloadAction<{product:Product,quantity:number}>) {


      const newitem=action.payload.product

      
      // state.items.push({...newitem})

        
      state.totalQuantity=state.totalQuantity+action.payload.quantity

      state.totalAmount=state.totalAmount+action.payload.product.quantity*action.payload.product.price
      ///  for a product whihc exist

      const exsistinProduct=state.items.find((item)=>item._id===newitem._id)

      if(!exsistinProduct){

        const totalPrice=newitem.price*action.payload.quantity

        state.items.push({...newitem,
        
        quantity:action.payload.quantity,
        totalPrice,
        })

      }else {
        const totalPrice =
          exsistinProduct.totalPrice +
          exsistinProduct.price * action.payload.quantity;
        exsistinProduct.quantity += action.payload.quantity;
        exsistinProduct.totalPrice = totalPrice;
      }

      
    },
    
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;