import React from "react";
import { numbers } from "../../../data";

const NumberButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numbers}</button>
    </>
  );
};
export default NumberButton;
