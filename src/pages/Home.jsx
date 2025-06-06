import React from "react";
import UserInput from "../module/user/userInput";
import BottomMainRight from "../module/user/BottomMainRight";

const Home = ({ userName, setUserName }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UserInput setUserName={setUserName} userName={userName} />
      </div>
      <div
        style={{
          textAlign: "right",
          width: "100%",
          paddingRight: "20px",
          boxSizing: "border-box",
        }}
      >
        <BottomMainRight userName={userName} />
      </div>
    </>
  );
};

export default Home;
