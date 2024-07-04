"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomersHeader";
import RestaurantFooter from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = (props) => {
  const [login, setLogin] = useState(true);
  // console.log(props);
  return (
    <>
      <CustomerHeader />
      <div className="container">
        <h1>{login ? "User Login" : "User Sign Up"}</h1>
        {login ? <UserLogin  redirect={props.searchParams} /> : <UserSignUp redirect={props.searchParams} />}
        <button onClick={() => setLogin(!login)} className="button-link">
          {login
            ? "Don't have account Signup here"
            : "Already have account Login"}
        </button>
      </div>
      <RestaurantFooter />
    </>
  );
};
export default UserAuth;
