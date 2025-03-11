import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserProvider.jsx";

const Login = () => {
  const [currentUser, setCurrentUser] = useState("");
  const UserStatus = useContext(UserContext);
  console.log(UserStatus);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user name"
        value={currentUser}
        onChange={(e) => setCurrentUser(e.target.value)}
      />
      <button onClick={() => UserStatus.login(currentUser)}>Login</button>
    </div>
  );
};

export default Login;
