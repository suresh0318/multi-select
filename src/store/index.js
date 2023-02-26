import { configureStore } from "@reduxjs/toolkit";
import arraySlice from "./arraySlice";
import nameSlice from "./nameSlice";
const store = configureStore({
    reducer:{
        array:arraySlice,
        names:nameSlice

    }
})
export default store