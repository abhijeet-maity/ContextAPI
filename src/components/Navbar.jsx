import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserProvider";

const Navbar = () => {
  const UserStatus = useContext(UserContext);
  console.log(UserStatus);

  return (
    <div>
      <h4>{UserStatus.user ? <>
        Welcome {UserStatus.user}
      </> : <>Login Please...</>}</h4>
    </div>
  );
};

export default Navbar;
