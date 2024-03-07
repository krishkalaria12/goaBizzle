import React, {useState, useLayoutEffect} from "react";
import PropertyCard from "./PropertyCard";
import { getProductListings } from "@/actions/ListListings";
import { updateProduct } from "@/actions/updateProduct";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteProperty } from "@/actions/deleteProperty";

const PropertiesTab = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useLayoutEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async() => {
    const response = await getProductListings();
    if (response) {
      setData(response.documents)
      setLoading(false)
    }
    else{ 
      setLoading(false);
    }
  }

  if (loading) {
    return <h1 className="h-screen flex justify-center items-center text-3xl font-bold">Loading</h1>
  }

  const handleEditSubmit = async (editedProduct) => {
    const data = await updateProduct(editedProduct)
    if (data) {
      setData((prevData) =>
      prevData.map((product) =>
        product.$id === editedProduct.productId ? editedProduct : product
      )
    );
    toast.success("Product Updated successfully")
    }
    else{
      toast.error("Failed to update product")
    }
  };

  const handleRemove = async (productId) => {
    const res = await deleteProperty(productId);
    if (res) {
      const updatedData = data.filter((product) => product.$id !== productId);
      setData(updatedData);
    }
  }

    return (
      <>
        <Toaster position="top-right" />
      <div className="p-2 h-full overflow-scroll">
        <div className="p-3 flex justify-between items-center">
          <h1 className="text-black font-semibold text-xl">Manage Properties</h1>
          <button onClick={() => router.push("/admin/addproperty")} className="text-purple-600 font-semibold bg-purple-200 rounded px-4 py-2 ">
            Add Property
          </button>
        </div>
        <div>
          {
            data && data.map((product, index) => <PropertyCard onReject={handleRemove} reject={true} area={product.area} pincode={product.pincode} edit={true} url={product.url} onEditSubmit={handleEditSubmit} section={"product"} name={product.name} bathrooms={product.bathrooms} productId={product.$id} bedrooms={product.bedrooms} propertyType={product.propertyType} city={product.city} description={product.description} email={product.email} price={product.price} key={product.$id} />)
          }
        </div>
      </div>
      </>
    );
};

export default PropertiesTab;
