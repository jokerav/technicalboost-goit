import {configureStore} from '@reduxjs/toolkit';
import {usersAPI} from "./usersAPI";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer:{
        [usersAPI.reducerPath]:usersAPI.reducer,
        dataSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersAPI.middleware),
})

export {store}