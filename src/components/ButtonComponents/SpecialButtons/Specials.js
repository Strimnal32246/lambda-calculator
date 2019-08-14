import React, { useState } from "react";

//import any components needed
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [specialState, setSpecialState] = useState(specials);
  const specialStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "300px",
    height: "100px",
    order: "1"
  };
  return (
    <div style={specialStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialState.map(special => {
        return <SpecialButton special={special} />;
      })}
    </div>
  );
};
export default Specials;
