import service from "@/lib/appwrite/dbconfig";

export const getProductListings = async () => {
    const data = await service.getPostsByListings();
    if (data) {
        return data
    }
    else {
        return false;
    }
}