import { useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./Contexts/ThemeProvider";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  document.body.style.backgroundColor = theme === "light" ? "white" : "#213547";

  return (
    <div style={{color: theme === "light" ? "#213547" : "white"}}>
      <h1>Hello world</h1>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

export default App;
