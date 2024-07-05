"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import Footer from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constants";
import { useRouter } from "next/navigation";

const Page = () => {
  const route = useRouter();

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
  const orderNow = () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      route.push("/order");
    } else {
      route.push("/user-auth?order=true");
    }
  };
  return (
    <>
      <CustomerHeader />

      <div className="food-item-wrapper">
        {cartStorage.length > 0 ? (
          cartStorage.map((item) => (
            <div className="list-item">
              <div className="list-item-block-1">
                <img src={item.img_path} alt="img" />
              </div>
              <div className="list-item-block-2">
                <div>{item.name}</div>
                <div className="description">{item.description}</div>

                <button onClick={() => removeFromCart(item._id)}>
                  Remove from cart
                </button>
              </div>
              <div className="list-item-block-3">Price :{item.price}</div>
            </div>
          ))
        ) : (
          <div className="food_item_not_available">
            <h2>Oops! No food item available</h2>
            <h4>Please try another restaurant</h4>
          </div>
        )}
      </div>
      <div className="total-wrapper">
        <div className="block-1">
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
        </div>
        <div className="block-2">
          <button onClick={orderNow}>Order Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Page;
