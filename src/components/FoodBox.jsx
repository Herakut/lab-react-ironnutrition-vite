//simplifica
const handleDeleteFood = (index) => {
  let clone = JSON.parse(JSON.stringify(props.foodToRender));
  clone.splice(index, 1);
  props.setFoodToRender(clone);
};

return (
  <div style={{ width: "18rem", marginBottom: "20px" }}>
    <img
      src={image}
      width={"200px"}
      height={"150px"}
      style={{ objectFit: "cover" }}
      alt=""
    />
    <div>
      <h4>{name}</h4>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories}</b> kcal
      </p>
      <button onClick={() => handleDeleteFood(props.index)}>Delete</button>
    </div>
  </div>
);


