"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import RestaurantFooter from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constants";

const Page = () => {
  const [userStorage, setUserStorage] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [total] = useState(() =>
    cartStorage.length == 1
      ? cartStorage[0].price
      : cartStorage.reduce((a, b) => {
          return a.price + b.price;
        })
  );
  return (
    <>
      <CustomerHeader />

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
          <button>Place your order</button>
        </div>
      </div>
      <RestaurantFooter />
    </>
  );
};
export default Page;
