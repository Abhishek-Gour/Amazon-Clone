import { createSlice } from "@reduxjs/toolkit";
const initialState = {value:0};
export const showSlice = createSlice({
    name:'showData',
    initialState,
    reducers:{
        addData:() => {

        },
        showData:(state,action) => {
            state.value = state.value;
        }
    },
})
export default showSlice.reducer;
export const {addData,showData} = showSlice.actions;