import { createSlice, isAllOf } from "@reduxjs/toolkit";

const initialState ={
    category: "all",
    maxPrice: 10000,
};

const filterSlice = createSlice({
    name: "filters",

    initialState,

    reducers:{
        setCategory: (state, action)=>{
            state.category = action.payload;
        },
        setMaxPrice: (state, action)=>{
            state.maxPrice = action.payload;
        },
        resetFilters: (state) =>{ 
            state.category = "all"; // resets category alone, price rest is handled via dispatch
        },
    },
});

export const {setCategory, setMaxPrice, resetFilters} = filterSlice.actions;

export default filterSlice.reducer;