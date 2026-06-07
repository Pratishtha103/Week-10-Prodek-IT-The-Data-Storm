import { createSlice } from "@reduxjs/toolkit";
import { Satellite } from "lucide-react";

const initialState = {
    darkMode: false,
};

const themeSlice = createSlice({
    name: "theme",

    initialState,
    
    reducers:{
        toggleTheme: (state)=>{
            state.darkMode = !state.darkMode;
        },
    },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;