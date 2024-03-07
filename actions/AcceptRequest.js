import service from "@/lib/appwrite/dbconfig";
import { deletePost } from "./DeleteRequest";

export const AcceptRequest = async (data, productId) => {
    const createListing = await service.createProductListing(data);
    const res = await deletePost(productId)

    if (createListing && res) {
        return createListing;
    }
    else {
        return false;
    }
}