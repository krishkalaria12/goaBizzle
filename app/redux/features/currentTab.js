"use client"

import { createSlice } from "@reduxjs/toolkit"

//Just to highlight the current tab

export const currentTabSlice = createSlice({
    name: "currentTab",
    initialState : {
        current: "home"
    },
    reducers: {
        setCT : (state,action) => {
            state.current = action.payload
        }
    }
})

export const {setCT} = currentTabSlice.actions
export default currentTabSlice.reducer