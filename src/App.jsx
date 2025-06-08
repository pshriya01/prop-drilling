import { useContext, useState } from "react";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [userName, setUserName] = useState("");
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        padding: 0,
        margin: -10,
      }}
    >
      <h2 style={{ textAlign: "center" }}>Prop Drilling Example</h2>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
      <Home userName={userName} setUserName={setUserName} />
    </div>
  );
}

export default App;
