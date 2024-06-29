import { useRouter } from "next/navigation";
import { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  // To Navigate
  const router = useRouter();

  const handleSignUp = async () => {
    // e.preventDefault();
    console.log(name, email, password, cPassword, city, address, mobile);
    let response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password, city, address, mobile }),
    });
    response = await response.json();
    if (response.success) {
      alert("user signup successfully");
      const { result } = response;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));
      router.push("/");
    } else {
      alert("Error occur while signup ");
    }
  };

  return (
    <>
      <h1>SignUp Page</h1>

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

      {/* Email */}
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        <button className="button" onClick={handleSignUp}>
          SignUp
        </button>
      </div>
    </>
  );
};
export default UserSignUp;
