import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const store=configureStore({
    reducer:{
        "productData" : Slice
    }
})

export default store