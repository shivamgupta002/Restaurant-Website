"use client";
import { useEffect, useState } from "react";
import DeliveryHeader from "../_components/DeliveryHeader";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    getMyOrders();
  }, []);
  const getMyOrders = async () => {
    const deliveryData = JSON.parse(localStorage.getItem("delivery"));
    console.log(deliveryData);
    let response = await fetch(
      "http://localhost:3000/api/deliveryPartners/orders/" + deliveryData._id
    );
    response = await response.json();
    if (response.success) {
      setMyOrders(response.result);
    }
  };

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem("delivery"));
    if (!delivery) {
      router.push("/deliveryPartner");
    }
  }, []);
  return (
    <>
      <DeliveryHeader />
      <h1>My order list</h1>
      {myOrders.map((item) => (
        <div
          className="restaurant-wrapper"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h4>Restaurant Name : {item.data.name}</h4>
          <div>Amount :{item.amount}</div>
          <div>Address :{item.data.address}</div>
          <div>Address :{item.data.address}</div>
          <div>Status :{item.status}</div>
          <div>
            Update Status : &nbsp;
            <select>
              <option value="confirm">Confirm</option>
              <option value="on_the_way">On the Way</option>
              <option value="delivered">Delivered</option>
              <option value="failed_to_delivered">Failed to Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </>
  );
};
export default Page;
