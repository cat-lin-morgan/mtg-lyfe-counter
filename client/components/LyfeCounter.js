import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { NewGameFlow  } from './NewGameFlow';
import { Game } from './Game';

export const LyfeCounter = () => {
    const { activeGame } = useContext(GlobalContext);

    return activeGame ? <Game/> : <NewGameFlow/>;
};