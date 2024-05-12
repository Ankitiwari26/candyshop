import React, { useState } from "react";
import "./Body.css";
import CandyInput from "./CandyInput";
import CandyList from "./CandyList";

const Body = (props) => {
  const [candies, setCandies] = useState([]);

  return (
    <>
      <CandyInput setCandies={setCandies} />
      <CandyList candies={candies} addToCartHandler={props.addToCartHandler} />
    </>
  );
};

export default Body;
