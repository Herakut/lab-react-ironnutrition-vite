import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

export default function FoodList() {
  const [allFood, setAllFood] = useState(foodsJson);
  const [foodToRender, setFoodToRender] = useState(allFood);

  return (
    <div>
      <h1>TODA LA COMIDA</h1>
      <br />

      <AddFoodForm
        foodToRender={foodToRender}
        setFoodToRender={setFoodToRender}
        setAllFood={setAllFood}
      />

      <hr />
      <br />
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {foodToRender.map((eachFood, i) => {
          return (
            <div key={i}>
              <FoodBox
                oneFood={eachFood}
                foodToRender={foodToRender}
                setFoodToRender={setFoodToRender}
                index={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
