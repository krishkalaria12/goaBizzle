import React, {useState, useLayoutEffect} from "react";
import RequestCard from "./RequestCard";
import { getRequestListings } from "@/actions/ListRequest";
import toast, {Toaster} from "react-hot-toast";
import { AcceptRequest } from "@/actions/AcceptRequest";
import { deletePost } from "@/actions/DeleteRequest";

const RequestsTab = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async() => {
    const response = await getRequestListings();
    if (response) {
      setData(response.documents)
      setLoading(false)
    }
    else{ 
      setLoading(false);
    }
  }

  const handleAccept = async (productId) => {
    const acceptedProduct = data.find((product) => product.$id === productId);

    if (acceptedProduct) {
      const dataRes = await AcceptRequest(acceptedProduct, productId);
      if (dataRes) {
        toast.success("Product Request accepted")
        const acceptedProduct1 = data.filter((product) => product.$id !== productId);
        setData(acceptedProduct1);
      }
    }
  };

    const handleReject = async (productId) => {
      const res = await deletePost(productId);
      if (res) {
        const updatedData = data.filter((product) => product.$id !== productId);
        setData(updatedData);
      }
    }


  if (loading) {
    return <h1 className="h-screen flex justify-center items-center text-3xl font-bold">Loading</h1>
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="p-2 h-full overflow-scroll">
        <h1 className="text-black font-semibold text-xl">Manage Requests</h1>
        <div>
          {
              data.map((req) => <RequestCard onAccept={handleAccept} onReject={handleReject} key={req.id} property={req}/>)
          }
        </div>
      </div>
    </>
  );
};

export default RequestsTab;
