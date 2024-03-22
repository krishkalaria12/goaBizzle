import authService from "@/lib/appwrite/authconfig";

const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    return data;
};

export default accountDetails;
