import React, { createContext } from "react";

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
