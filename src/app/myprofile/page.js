"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import Footer from "../_components/Footer";

const Page = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    getMyOrders();
  }, []);
  const getMyOrders = async () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    let response = await fetch(
      "http://localhost:3000/api/order?id=" + userStorage._id
    );
    response = await response.json();
    if (response.success) {
      setMyOrders(response.result);
    }
  };

  console.log(myOrders);
  return (
    <>
      <CustomerHeader />
      {myOrders.map((item) => (
        <div
          className="restaurant-wrapper"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h4>{item.data.name}</h4>
          <h4>Amount :{item.amount}</h4>
          <h4>Address :{item.data.address}</h4>
          <h4>Status :{item.status}</h4>
        </div>
      ))}
      <Footer />
    </>
  );
};
export default Page;
