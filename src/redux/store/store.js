import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../state-slice/productSlice';
import settingsReducer from '../state-slice/settingsSlice';



export default configureStore({
    reducer: {
        settings:settingsReducer,
        product:productReducer,
       
    }
})