"use client";
import { useState } from "react";

const Page = () => {
  // login state
  const [loginMobile, setLoginMobile] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // signup state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const loginHandle = () => {};
  return (
    <>
      <h1>Delivery partner</h1>
      <div className="auth-container">
        {/* ######################  Login   ###################### */}

        <div className="login-wrapper">
          <h3>Login </h3>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Mobile"
              className="input-field"
              value={loginMobile}
              onChange={(event) => setLoginMobile(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              value={loginPassword}
              className="input-field"
              onChange={(event) => setLoginPassword(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <button className="button" onClick={loginHandle}>
              Login
            </button>
          </div>
        </div>
        {/* ######################  Signup   ###################### */}

        <div className="signup-wrapper">
          <h3>SignUp </h3>

          {/* Name */}
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter name"
              className="input-field"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          {/* Mobile Number */}
          <div className="input-wrapper">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="input-field"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
              value={cPassword}
              onChange={(event) => setCPassword(event.target.value)}
            />
          </div>

          {/* City */}
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter city"
              className="input-field"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>

          {/* Address */}
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Address"
              className="input-field"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="input-wrapper">
            <button className="button">
              {/* <button className="button" onClick={handleSignUp}> */}
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
