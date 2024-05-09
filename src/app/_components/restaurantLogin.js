const RestaurantLogin = () => {
  return (
    <>
      <h3>Login Component</h3>
      <div className="input-Wrapper">
        <input type="text" placeholder="Enter Email" className="input-field" />
      </div>
      <div className="input-Wrapper">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <button className="button">Login</button>
      </div>
    </>
  );
};

export default RestaurantLogin;
