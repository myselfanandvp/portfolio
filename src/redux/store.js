import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterslice'
import themeReducer from './themeSlicer/themeslice'


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        theme:themeReducer,
    },
});