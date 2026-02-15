import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode:true
}


const themeSlice = createSlice({
    name:'theme',
    initialState:initialState,
    reducers:{
        toogleTheme:(state)=>{
            state.mode = state.mode? false:true
        }
    }
})

export const {toogleTheme} = themeSlice.actions;

export default themeSlice.reducer;