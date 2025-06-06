import React from "react";

const BottomMainRight = ({ userName }) => {
  return (
    <div>
      <h3 style={{ color: "red" }}>Welcome! {userName || "User"}</h3>
    </div>
  );
};

export default BottomMainRight;
