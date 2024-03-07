import service from "@/lib/appwrite/dbconfig";

export const updateProduct = async (data) => {
    try {
        const id = data.productId
        const updateListingDetails = await service.updatePost(id,{
            name: data.name,
            propertyType: data.propertyType,
            city: data.city,
            area: data.area,
            pincode: data.pincode,
            description: data.description,
            price: data.price,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            email: data.email
        });
        return updateListingDetails
    } catch (error) {
        console.error(error);
    }
}   