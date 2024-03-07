'use client'

import { createSlice } from "@reduxjs/toolkit"

export const adminNavSlice = createSlice({
    name: 'adminNavSlice',
    initialState : {
        currentTab : "property",
    },
    reducers: {
        setTab: (state, action) => {
            state.currentTab = action.payload
        }
    }
})

export const {setTab} = adminNavSlice.actions;

export default adminNavSlice.reducer