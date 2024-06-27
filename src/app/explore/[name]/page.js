"use client";
import CustomerHeader from "@/app/_components/CustomersHeader";
import RestaurantFooter from "@/app/_components/Footer";
import { useEffect, useState } from "react";

const Page = (props) => {
  const name = props.params.name;

  const [restaurantDetail, setRestaurantDetail] = useState();
  const [foodItem, setFoodItem] = useState([]);
  const [cartData, setCartData] = useState();
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartIds, setCartIds] = useState(
    cartStorage
      ? () =>
          cartStorage.map((item) => {
            return item._id;
          })
      : []
  );
  const [removeCartData, setRemoveCartData] = useState();

  useEffect(() => {
    loadRestaurantDetails();
  }, []);
  const loadRestaurantDetails = async () => {
    const id = props.searchParams.id;
    // console.log(id);
    let response = await fetch("http://localhost:3000/api/customer/" + id);
    response = await response.json();
    if (response.success) {
      setRestaurantDetail(response.details);
      setFoodItem(response.foodItem);
    }
  };

  const addToCart = (item) => {
    setCartData(item);

    let localCartIds = cartIds;
    localCartIds.push(item._id);
    setCartIds(localCartIds);
    setRemoveCartData();
  };
  const removeFromCart = (id) => {
    setRemoveCartData(id);
    let localIds = cartIds.filter((item) => item != id);
    setCartData();
    setCartIds(localIds);
  };

  return (
    <>
      <CustomerHeader cartData={cartData} removeCartData={removeCartData} />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div className="detail-wrapper">
        <h4>Contact : {restaurantDetail?.contact}</h4>
        <h4>City : {restaurantDetail?.city}</h4>
        <h4>Address : {restaurantDetail?.address}</h4>
        <h4>Email : {restaurantDetail?.email}</h4>
      </div>
      <div className="food-item-wrapper">
        {foodItem.length > 0 ? (
          foodItem.map((item) => (
            <div className="list-item">
              <div>
                <img src={item.img_path} alt="img" />
              </div>
              <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div className="description">{item.description}</div>
                {cartIds.includes(item._id) ? (
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove from cart
                  </button>
                ) : (
                  <button onClick={() => addToCart(item)}>Add to cart</button>
                )}
              </div>
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
