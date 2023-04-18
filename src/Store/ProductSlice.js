import { createSlice } from "@reduxjs/toolkit";
const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            // redux:
            state.data = action.payload;
            // state.push(action.payload);
        },
        setStatus(state, action) {
           state.status = action.payload;
        },
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
