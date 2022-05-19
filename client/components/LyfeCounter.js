import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { NewGameFlow } from "./NewGameFlow";
import { Game } from "./Game";

export const LyfeCounter = () => {
  const { activeGame } = useGlobalContext();

  return activeGame ? <Game /> : <NewGameFlow />;
};
