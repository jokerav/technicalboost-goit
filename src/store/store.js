import {configureStore} from '@reduxjs/toolkit';
import {usersAPI} from "./usersAPI";

const store = configureStore({
    reducer:{
        [usersAPI.reducerPath]:usersAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersAPI.middleware),
})

export {store}