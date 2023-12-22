/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = ({ score, scoreColor, scoreChange }) => {
  return (
    <ScoreContainer scoreColor={scoreColor}>
      <div className="score-display">
        <h1>{score}</h1>
        <span className="toAnimate">
          {scoreChange != 0
            ? scoreChange > 0
              ? `+${scoreChange}`
              : scoreChange
            : ""}
        </span>
      </div>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;
  .score-display {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0;
    color: ${(props) => props.scoreColor};
    display: inline;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  .toAnimate {
    color: ${(props) => props.scoreColor};
    position: relative;
    left: 40px;
    animation: toAnimate 4s infinite;
    font-size: 24px;
  }

  @keyframes toAnimate {
    0% {
      opacity: 0;
      bottom: 1px;
    }
    50% {
      opacity: 1;
      bottom: 80px;
    }
    100% {
      opacity: 0;
      bottom: 1px;
    }
  }
`;
