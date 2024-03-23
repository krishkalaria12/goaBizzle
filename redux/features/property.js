const { createSlice } = require("@reduxjs/toolkit");

const PropertySlice = createSlice({
    name: "property",
    initialState: {
        name: "",
        propertyType: "",
        sqft: "",
        city: "",
        area: "",
        pincode: "",
        description: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        imageUrls: [],
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
        },
        setImageUrls :(state,action) => {
            state.imageUrls = action.payload
        },
        setSqft : (state,action) => {
            state.sqft = action.payload
        }
    }
})

export const { setName, setPropertyType, setCity,setArea, setPincode, setDescription, setPrice, setBedrooms, setBathrooms, setImageUrls, setSqft} = PropertySlice.actions

export default PropertySlice.reducer;