import { configureStore } from "@reduxjs/toolkit";

import { getSong } from "../services/songAPi";


export default  configureStore({
    reducer: {
        [getSong.reducerPath]: getSong.reducer,
    },
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(getSong.middleware),
})