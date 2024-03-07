import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        name:"",
        propertyType: "",
        location: "",
        priceRange: [],
        bedrooms: [],
        bathrooms:[],
        allProperties:[],
        filteredProperties:[]
    },
    reducers:{
        setName: (state,action) => {
            state.name = action.payload
        },
        setPropertyType: (state,action) => {
            state.propertyType = action.payload
        },
        setLocation: (state,action) => {
            state.location = action.payload
        },
        setPriceRange : (state,action) => {
            state.priceRange = action.payload
        },
        setBedrooms: (state,action) => {
            state.bedrooms = action.payload
        },
        setBathrooms: (state,action) => {
            state.bathrooms = action.payload
        },
        setAllProperties: (state,action) => {
            state.allProperties = action.payload
        },
        setFilteredProperties : (state,action) => {
            state.filteredProperties = action.payload
        }
    }
})

export const {setBathrooms,setBedrooms,setLocation,setPriceRange,setPropertyType, setName, setAllProperties, setFilteredProperties } = filterSlice.actions
export default filterSlice.reducer