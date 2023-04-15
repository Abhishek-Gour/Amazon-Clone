import { configureStore } from "@reduxjs/toolkit";
import { showData } from "../Features/ShowSlice";

export const store = configureStore({
    reducer:{
        show:showData,
    },
})