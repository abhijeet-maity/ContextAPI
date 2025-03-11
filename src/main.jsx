import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Contexts/ThemeProvider.jsx";
import { UserProvider } from "./Contexts/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
);
