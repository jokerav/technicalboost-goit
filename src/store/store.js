import {configureStore} from '@reduxjs/toolkit';
import {usersAPI} from "./usersAPI";
import dataSlice from "./dataSlice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
} from 'redux-persist';

const dataPersistConfig = {
    key:'data',
    storage
}

const store = configureStore({
    reducer:{
        [usersAPI.reducerPath]:usersAPI.reducer,
        data: persistReducer(dataPersistConfig, dataSlice),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersAPI.middleware),
});
const persistor = persistStore(store);
export {store, persistor};