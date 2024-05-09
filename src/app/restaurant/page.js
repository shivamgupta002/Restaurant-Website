"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurant Login/SignUp</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <div>
          <button onClick={() => setLogin(!login)} className="button-link">
            {login
              ? "Do not have Account? SignUp"
              : "Already have Account? Login  "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
