import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({ name, price, img_path: path, description }),
    });
    response=await response.json();
    if(response.success){
      alert("food item added successfully")
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
