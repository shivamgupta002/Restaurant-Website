import { useState } from "react";

const AddFoodItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("food item added successfully");
      props.setAddItem(false);
    } else {
      alert("food item not added");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Add New Food Item</h1>
        {/* Name */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter food item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && (
            <span className="input-error">Please enter valid name</span>
          )}
        </div>
        {/* Price */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {error && !price && (
            <span className="input-error">Please enter valid price</span>
          )}
        </div>
        {/* Image path */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter image path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
          {error && !path && (
            <span className="input-error">Please enter valid Image path</span>
          )}
        </div>
        {/* description */}
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && !description && (
            <span className="input-error">Please enter valid description</span>
          )}
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleAddFoodItem}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
