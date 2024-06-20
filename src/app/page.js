"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomersHeader";
import Footer from "./_components/Footer";
import { useRouter } from "next/navigation";
export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadLocation();
    loadRestaurant();
  }, []);
  const loadLocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();
    if (response.success) {
      setLocations(response.result);
    } else {
    }
  };
  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
    loadRestaurant({ location: item });
  };
  const loadRestaurant = async (params) => {
    let url = "http://localhost:3000/api/customer";
    if (params?.location) {
      url = url + "?location=" + params.location;
    } else if (params?.restaurant) {
      url = url + "?restaurant=" + params.restaurant;
    }
    let response = await fetch(url);
    response = await response.json();
    if (response.success) {
      setRestaurants(response.result);
    }
  };
  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery app</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
            value={selectedLocation}
            onClick={() => setShowLocation(true)}
          />
          <ul className="location-list">
            {showLocation &&
              locations.map((item) => (
                <li onClick={() => handleListItem(item)}>{item}</li>
              ))}
          </ul>
          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant name"
            onChange={(event) =>
              loadRestaurant({ restaurant: event.target.value })
            }
          />
        </div>
      </div>
      <div className="restaurant-list-container">
        {restaurants.map((item) => (
          <div
            onClick={() => router.push("explore/" + item.name+"?id=" + item._id)}
            className="restaurant-wrapper"
          >
            <div className="heading-wrapper">
              <h3>{item.name}</h3>
              <h5>{item.contact}</h5>
            </div>
            <div className="address-wrapper">
              <div>{item.city},</div>
              <div className="address">{item.address},</div>
              <div>{item.email}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
