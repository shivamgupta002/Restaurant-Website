import { useRouter } from "next/navigation";
import { useState } from "react";

const UserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const loginHandle = async () => {
    // console.log(email, password);
    let response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    response = await response.json();
    if (response.success) {
      alert("User Login successfully");
      const { result } = response;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));
      if (props?.redirect?.order) {
        router.push("/order");
      } else {
        router.push("/");
      }
    } else {
      alert("Invalid credentials! Please try again ");
    }
  };
  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter email"
          className="input-field"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter Password"
          value={password}
          className="input-field"
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={loginHandle}>
          Login
        </button>
      </div>
    </>
  );
};
export default UserLogin;
