
import { configureStore } from "@reduxjs/toolkit";
import AddFavSlice from "./Slices/AddFavSlice";

export const Store = configureStore({
    reducer: {
        AddFavSlice
    }
})