import React, { useState } from "react";
import "./CandyInput.css";

const CandyInput = ({ setCandies }) => {
  const [candyName, setCandyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const AddCandyHandler = (event) => {
    event.preventDefault();
    if (
      candyName.trim().length === 0 ||
      description.trim().length === 0 ||
      price.trim().length === 0
    ) {
      return;
    }
    if (parseInt(price) < 1) {
      return;
    }
    const newCandy = {
      id: Math.random().toString(),
      name: candyName,
      description,
      price,
    };
    setCandies((prevCandies) => [...prevCandies, newCandy]);
    setCandyName("");
    setDescription("");
    setPrice("");
  };

  const candyNameHandle = (event) => {
    setCandyName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={AddCandyHandler}>
        <div className="ChocoName">
          <label htmlFor="name">Candy Name : </label>
          <input
            type="text"
            id="name"
            value={candyName}
            onChange={candyNameHandle}
          />
        </div>
        <div className="Description">
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={descriptionHandler}
          />
        </div>
        <div className="Price">
          <label htmlFor="price">Price : </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={priceHandler}
          />
        </div>
        <div>
          <button className="AddButton">Add</button>
        </div>
      </form>
    </>
  );
};

export default CandyInput;
