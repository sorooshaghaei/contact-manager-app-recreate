import React from "react";
import spinnerGif from "../assets/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        className="d-block m-auto"
        style={{ width: "200px" }}
        src={spinnerGif}
        alt="waiting..."
      />
    </>
  );
};

export default Spinner;
