import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name: 'productData',
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
        removeProduct:(state,action)=>{
            return state.filter((product)=>
                product.id!==action.payload.id
            )
        },
        increment:(state,action)=>{
            const updateCart=state.map((product)=>
                product.id===action.payload.id ? {...product,quantity:product.quantity+1} : product
            )
            return updateCart
        },
        decrement:(state,action)=>{
            const deleteCart=state.map((product)=>
                product.id===action.payload.id ? {...product,quantity:product.quantity-1} : product
            )
            return deleteCart
        },
        filterProducts:(state,action)=>{
            return state.filter((product)=>
                product.id==action.payload.category
            )
        }
    }
})

export const {addProduct,removeProduct,increment,decrement,filterProducts}=Slice.actions
export default Slice.reducer