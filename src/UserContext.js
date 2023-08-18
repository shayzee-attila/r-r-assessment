import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false); // New isLoggedIn state

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, isLoggedIn, setLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
