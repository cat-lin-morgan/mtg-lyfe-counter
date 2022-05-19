import React, { createContext, useState, useContext } from "react";

// first moment of creation
export const GlobalContext = createContext();

// then this takes over
export const GlobalContextProvider = ({ children }) => {
  const [activeGame, setActiveGame] = useState(false);
  const [newGameStep, setNewGameStep] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ activeGame, setActiveGame, newGameStep, setNewGameStep }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};
