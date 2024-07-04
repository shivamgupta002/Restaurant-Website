"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import RestaurantFooter from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constants";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userStorage, setUserStorage] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [total] = useState(() =>
    cartStorage?.length == 1
      ? cartStorage[0].price
      : cartStorage?.reduce((a, b) => {
          return a.price + b.price;
        })
  );

  const [removeCartData, setRemoveCartData] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!total) {
      router.push("/");
    }
  }, [total]);
  let amount = total + DELIVERY_CHARGES + (TAX * total) / 100;
  const orderNow = async () => {
    let user_id = JSON.parse(localStorage.getItem("user"))._id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let resto_id = cart[0].resto_id;
    let foodItemIds = cart.map((item) => item._id).toString();
    let deliveryBoy_id = "66867a5f3eb9f71c3345ac0a";
    let collection = {
      user_id,
      cart,
      resto_id,
      foodItemIds,
      deliveryBoy_id,
      status: "confirm",
      amount,
    };
    let response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(collection),
    });
    response = await response.json();
    if (response.success) {
      alert("Order place successfully");
      setRemoveCartData(true);
      router.push("/myprofile");
    } else {
      alert("Order failed");
    }
    // console.log(collection);
  };
  return (
    <>
      <CustomerHeader removeCartData={removeCartData} />

      <div className="total-wrapper">
        <div className="block-1">
          <h2>User details</h2>
          <div className="row">
            <span>Name :</span>
            <span>{userStorage?.name}</span>
          </div>
          <div className="row">
            <span>Address :</span>
            <span>{userStorage?.address}</span>
          </div>
          <div className="row">
            <span>Mobile No. :</span>
            <span>{userStorage?.mobile}</span>
          </div>
          <h2>Amount Details</h2>
          <div className="row">
            <span>Food charges :</span>
            <span>{total}</span>
          </div>
          <div className="row">
            <span>Tax :</span>
            <span>{(TAX * total) / 100}</span>
          </div>
          <div className="row">
            <span>Delivery Charges :</span>
            <span>{DELIVERY_CHARGES}</span>
          </div>
          <div className="row">
            <span>Total Amount :</span>
            <span>{total + DELIVERY_CHARGES + (TAX * total) / 100}</span>
          </div>
          <h2>Payment Method :</h2>
          <div className="row">
            <span>Cash on Delivery :</span>
            <span>{total + DELIVERY_CHARGES + (TAX * total) / 100}</span>
          </div>
        </div>
        <div className="block-2">
          <button onClick={orderNow}>Place your order</button>
        </div>
      </div>
      <RestaurantFooter />
    </>
  );
};
export default Page;
