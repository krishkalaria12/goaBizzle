import service from "@/lib/appwrite/dbconfig";

export const getRequestListings = async () => {
    const data = await service.getPostsByRequests();
    if (data) {
        return data
    }
    else {
        return false;
    }
}