import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandle = () => {
    console.log(email, password);
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
