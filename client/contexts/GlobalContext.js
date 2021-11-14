import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(
    {
        activeGame: false,
        setActiveGame: () => {},
        newGameStep: 0,
        setNewGameStep: () => {},
    }
);

export const GlobalContextProvider = ({children}) => {
    const [activeGame, setActiveGame] = useState(false);
    const [newGameStep, setNewGameStep] = useState(0);
    
    return (
        <GlobalContext.Provider value={{activeGame, setActiveGame, newGameStep, setNewGameStep}}>
            {children}
        </GlobalContext.Provider>
    )
};