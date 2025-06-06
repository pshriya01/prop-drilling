import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Prop Drilling Example</h2>
      <Home userName={userName} setUserName={setUserName} />
    </div>
  );
}

export default App;
