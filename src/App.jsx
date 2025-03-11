import { useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./Contexts/ThemeProvider";
import SettingsPage from "./components/SettingsPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  document.body.style.backgroundColor = theme === "light" ? "white" : "#213547";

  const styles = {
    "maxWidth": "100vw",
    "padding": "4px 10px",
    "display": "flex",
    "backgroundColor" : "pink",
    "justifyContent" : "space-between",
  };

  return (
    <div style={{ color: theme === "light" ? "#213547" : "white" }}>
      <div style={styles}>
        <Navbar />
        <Login />
      </div>
      <h1>Hello world</h1>
      <button onClick={toggleTheme}>toggle</button>
      <SettingsPage />
    </div>
  );
};

export default App;
