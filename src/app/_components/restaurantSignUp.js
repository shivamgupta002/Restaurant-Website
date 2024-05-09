const RestaurantSignUp = () => {
  return (
    <>
      <h3>SignUp</h3>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter restaurant Name"
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter City"
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="text"
          placeholder="Enter full Address"
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <input
          type="phone"
          placeholder="Enter Contact No."
          className="input-field"
        />
      </div>
      <div className="input-Wrapper">
        <button className="button">SignUp</button>
      </div>
    </>
  );
};

export default RestaurantSignUp;
