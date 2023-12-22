import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
function App() {
  const [gameStart, setGameStart] = useState(false);
  const toggleGamePlay = () => {
    setGameStart(!gameStart);
  };
  return (
    <>
      {gameStart ? (
        <GamePlay></GamePlay>
      ) : (
        <StartGame toggle={toggleGamePlay}></StartGame>
      )}
    </>
  );
}

export default App;
