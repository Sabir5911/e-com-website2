import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS, Product } from "../components/sanityfetch";

export interface CartDataType {
//   user_id: string;
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


      // const newitem=action.payload.product

      // state.items.push({...newitem})

      state.items.push(action.payload.product)
    
      state.totalQuantity=state.totalQuantity+action.payload.quantity

      state.totalAmount=state.totalQuantity*action.payload.product.price
      

    

    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;