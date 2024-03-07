import service from "@/lib/appwrite/dbconfig";

export const deletePost = async (id) => {
    const response = await service.deletePost(id)
    return response
}