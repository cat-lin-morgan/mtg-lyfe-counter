import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { HomeScreen } from "./HomeScreen";
import { GameOptions } from "./GameOptions";
import { Randomizer } from "./Randomizer";

export const NewGameFlow = () => {
  // this grabs only newGameStep
  const { newGameStep } = useGlobalContext();

  switch (newGameStep) {
    case 0:
      return <HomeScreen />;
    // if new game step is 0 we show home screen
    case 1:
      return <GameOptions />;
    // if new game step is 1 we show game options
    case 2:
      return <Randomizer />;
    // if new game step is 2 we show randomizer
  }

  return null;
};
