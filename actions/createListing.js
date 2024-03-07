import service from "@/lib/appwrite/dbconfig";

export const createListing = async (data) => {
    try {
        const createListingDetails = await service.createListing({
            name: data.name,
            propertyType: data.propertyType,
            city: data.city,
            area: data.area,
            pincode: data.pincode,
            description: data.description,
            price: data.price,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            email: data.email,
            username: data.username,
            phone: data.phone,
            url: data.url,
        });
        return createListingDetails
    } catch (error) {
        console.error(error);
    }
}

