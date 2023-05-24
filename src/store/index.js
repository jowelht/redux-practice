import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import thunk from "redux-thunk";

import counterReducer from './counter/counterSlice'
import cartReducer from "./cart/cartSlice"

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store)
