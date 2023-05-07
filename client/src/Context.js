import React, { useState } from "react";
import { createContext } from "react";

export const analysisContext = createContext();

export const ProcessContextProvider = ({ children }) => {
  const [Anapros, setAnapros] = useState("");

  return (
    <analysisContext.Provider value={[Anapros, setAnapros]}>
      {children}
    </analysisContext.Provider>
  );
};
