import React, { useState } from "react";

export default function AddFoodForm(props) {

  //state, dos argumentos set
  const [nameInput, setNameInput] = useState("");
  const [servingInput, setServingInput] = useState(0);
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [show, setShow] = useState(false);



















  //Funcionalidades
  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };
  const handleServingChange = (event) => {
    setServingInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (
      nameInput === "" ||
      caloriesInput === 0 ||
      imageInput === "" ||      
      servingInput === 0
    ) {
      setShow(true);
      return;
    }

    let newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingInput,
    };

    let clone = JSON.parse(JSON.stringify(props.foodToRender));
    clone.unshift(newFood);
    props.setFoodToRender(clone);
    props.setAllFood(clone);
  };

  return (
    <div>
      <h4>Agregar un producto</h4>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            onChange={handleNameChange}
            value={nameInput}
          />
          <p>Product name</p>
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            onChange={handleImageChange}
            value={imageInput}
          />
          <p>Añade una foto</p>
        </div>

        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            name="calories"
            onChange={handleCaloriesChange}
            value={caloriesInput}
          />
          <p>Añade las calorías</p>
        </div>

        <div>
          <label htmlFor="servings">Total</label>
          <input
            type="number"
            name="servings"
            onChange={handleServingChange}
            value={servingInput}
          />
          <p>Total de productos añadidos</p>
        </div>

        <button type="submit">Create</button>

        <br />

        <div>
          {show && (
            <div>
              <p>CUIDADO</p>
              <p>No dejes los campos vacios</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}