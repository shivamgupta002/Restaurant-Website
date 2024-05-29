import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    // console.log(email, password);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, login: true }),
    });
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
      // alert("successfully login");
    } else {
      alert("Login failed");
    }
  };
  return (
    <>
      <h3>Login Component</h3>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && !email && (
          <span className="input-error">Please enter valid email</span>
        )}
      </div>
      <div className="input-Wrapper">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && !password && (
          <span className="input-error">Please enter valid password</span>
        )}
      </div>
      <div className="input-Wrapper">
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default RestaurantLogin;
