import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

const store = configureStore({
    reducer:{
        post:cartslice
    }
})

export default store