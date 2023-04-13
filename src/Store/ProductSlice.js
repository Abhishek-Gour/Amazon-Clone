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
// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch,getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         const prop = getState();
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE));
//         }catch(err) {
//             console.log(err)
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }