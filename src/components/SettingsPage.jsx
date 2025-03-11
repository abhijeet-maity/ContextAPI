import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider.jsx";


const SettingsPage = () => {
  
  //useContext hook provides Object i.e values which was returned by Provider.
  //We must use Object destructuring to destructure the Object returned by Provider.
  const obj = useContext(ThemeContext);
  console.log(obj);

  document.body.style.backgroundColor = obj.theme === "tomato" ? "tomato" : "dark";

  return (
    <div>
        <h4>Welcome to Settings Page</h4>
        <button onClick={() => obj.setTheme("tomato")}>Red background</button>
    </div>
  )
}

export default SettingsPage