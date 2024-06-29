"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import RestaurantFooter from "../_components/Footer";

const Page = () => {
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
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
      <RestaurantFooter />
    </>
  );
};
export default Page;
