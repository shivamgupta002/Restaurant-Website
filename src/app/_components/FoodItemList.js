const FoodItemList = () => {
  return (
    <>
      <h1>FoodItemList</h1>
      <table>
        <thead>
          <tr>
            <td>S.N.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Pizza</td>
            <td>300</td>
            <td>best seller</td>
            <td>image</td>
            <td>
              <button>delete</button>
              <button>edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FoodItemList;
