"use client";
import CustomerHeader from "@/app/_components/CustomersHeader";
import { useEffect, useState } from "react";

const Page = (props) => {
  const name = props.params.name;

  const [restaurantDetail, setRestaurantDetail] = useState();
  const [foodItem, setFoodItem] = useState([]);

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
  return (
    <>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div>
        <h3>{restaurantDetail?.contact}</h3>
        <h3>{restaurantDetail?.city}</h3>
        <h3>{restaurantDetail?.address}</h3>
        <h3>{restaurantDetail?.email}</h3>
      </div>
      <div>
        {foodItem.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h5>{item.price}</h5>
            <h6>{item.description}</h6>
            <img src={item.img_path} alt="img" style={{ width: 100 }} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Page;
