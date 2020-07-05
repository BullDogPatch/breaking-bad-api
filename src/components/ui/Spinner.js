import React from "react";

const spinnerImage =
  "https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/spinner.gif";
const Spinner = () => {
  return (
    <img
      src={spinnerImage}
      alt="Loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
