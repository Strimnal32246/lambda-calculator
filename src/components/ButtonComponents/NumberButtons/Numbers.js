import React, { useState } from "react";

//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  const numStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "200px",
    justifyContent: "space-around",
    height: "400px",
    order: "3"
  };
  console.log(numbers);
  return (
    <div style={numStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map(number => {
        return <NumberButton number={number} />;
      })}
    </div>
  );
};
export default Numbers;
