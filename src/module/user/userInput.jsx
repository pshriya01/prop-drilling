import React from "react";

const UserInput = ({ userName, setUserName }) => {
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        maxLength={20}
      />
    </div>
  );
};

export default UserInput;
