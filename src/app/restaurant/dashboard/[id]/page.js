"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditFoodItems = (props) => {
  //   console.log(props.params.id);
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    handleLoadItem();
  }, []);

  const handleLoadItem = async () => {
    console.log(props.params.id);
    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`
    );
    response = await response.json();
    if (response.success) {
      // console.log(response.result);
      setName(response.result.name);
      setPrice(response.result.price);
      setPath(response.result.img_path);
      setDescription(response.result.description);
    }
  };

  const handleEditFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, img_path: path, description }),
      }
    );
    response = await response.json();
    if (response.success) {
      // alert("food item updated successfully");
      router.push("../dashboard");
    } else {
      alert("error while updating food item");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Update Food Item</h1>
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
          <button className="button" onClick={handleEditFoodItem}>
            Update food item
          </button>
        </div>
        <div className="input-wrapper">
          <button
            className="button"
            onClick={() => router.push("../dashboard")}
          >
            back to food item list
          </button>
        </div>
      </div>
    </>
  );
};

export default EditFoodItems;
