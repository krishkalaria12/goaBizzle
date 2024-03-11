import service from "@/lib/appwrite/dbconfig"

export const getProduct = async (productId) => {
    try {
        const data = await service.getPost(productId);
        if (data) {
            return { data, wrongSlug: false };
        } else {
            return { data: null, wrongSlug: true };
        }
    } catch (error) {
        console.error(error);
    }
}
