const { createSlice } = require("@reduxjs/toolkit");

const PropertySlice = createSlice({
    name: "property",
    initialState: {
        name: "",
        propertyType: "",
        city: "",
        area: "",
        pincode: "",
        description: "",
        price: "",
        bedrooms: "",
        bathrooms: ""
    },
    reducers : {
        setName: (state,action) => {
            state.name = action.payload
        },
        setPropertyType: (state,action) => {
            state.propertyType = action.payload
        },
        setCity: (state,action) =>{
            state.city = action.payload
        },
        setArea : (state,action) => {
            state.area = action.payload
        },
        setPincode: (state,action) => {
            state.pincode = action.payload
        },
        setDescription: (state,action) => {
            state.description = action.payload
        },
        setPrice: (state,action) => {
            state.price = action.payload
        },
        setBedrooms: (state,action) => {
            state.bedrooms = action.payload
        },
        setBathrooms : (state,action) => {
            state.bathrooms = action.payload
        }
    }
})

export const { setName, setPropertyType, setCity,setArea, setPincode, setDescription, setPrice, setBedrooms, setBathrooms} = PropertySlice.actions

export default PropertySlice.reducer;