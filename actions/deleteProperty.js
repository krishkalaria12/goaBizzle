import service from "@/lib/appwrite/dbconfig";

export const deleteProperty = async (id) => {
    const response = await service.deleteProperty(id)
    return response
}