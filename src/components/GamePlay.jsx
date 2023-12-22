import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [scoreColor, setScoreColor] = useState("black");
  const [scoreChange, setChangeScore] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(score + randomNumber);
      setScoreColor("green");
      setChangeScore(randomNumber);
    } else {
      setScore(score - 2);
      setScoreColor("red");
      setChangeScore(-2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore
          score={score}
          scoreColor={scoreColor}
          scoreChange={scoreChange}
        />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
          setScoreColor={setScoreColor}
          setChangeScore={setChangeScore}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        roleDice={roleDice}
        scoreColor={scoreColor}
      />
      <div className="btns">
        <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide" : "Show"} rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
