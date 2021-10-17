import React, {CreateContext, useState} from 'react';

const DefaultState = {
    activeGame: false,
};

export const GlobalContext = CreateContext(DefaultState);

export const GlobalContextProvider = ({children}) => {
    const [state, setState] = useState(DefaultState)

    return (
        <GlobalContext.Provider value={{state}}>
            {children}
        </GlobalContext.Provider>
    )
};