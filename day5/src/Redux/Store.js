
import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./Slices/CountSlice";

export const Store = configureStore({
    reducer: {
        CountSlice
    }
})