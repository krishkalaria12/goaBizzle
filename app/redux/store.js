"use client"

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice";
import currentTabReducer from "./features/currentTab";
import filterReducer from "./features/filterSlice";
import propertyReducer from "./features/property"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        currentTB :  currentTabReducer,
        filter: filterReducer,
        property: propertyReducer
    }
})