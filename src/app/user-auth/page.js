"use client";
import CustomerHeader from "../_components/CustomersHeader";
import RestaurantFooter from "../_components/Footer";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = () => {
  return (
    <>
      <CustomerHeader />
      <div className="container">
        <UserSignUp />
      </div>
      <RestaurantFooter />
    </>
  );
};
export default UserAuth;
