import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = () => {
    console.log(email, password, c_password, name,city, address, contact);
  };

  return (
    <>
      <h3>SignUp</h3>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
          value={c_password}
          onChange={(event) => setC_password(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter restaurant Name"
          className="input-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter City"
          className="input-field"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter full Address"
          className="input-field"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="phone"
          placeholder="Enter Contact No."
          className="input-field"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </div>
      <div className="input-Wrapper">
        <button className="button" onClick={handleSignUp}>
          SignUp
        </button>
      </div>
    </>
  );
};

export default RestaurantSignUp;
