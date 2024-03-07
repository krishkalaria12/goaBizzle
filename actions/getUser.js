import authService from "@/lib/appwrite/authconfig";

const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    if (data == undefined || data == null) {
        return null;
    } else {
        return data;
    }
};

export default accountDetails;
