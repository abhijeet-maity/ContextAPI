import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (name) => {
        setUser(name);
    }

    const logout = () => {
        setUser(null);
    }

  return <UserContext.Provider value={{user, setUser, login, logout}}>{children}</UserContext.Provider>;
};
