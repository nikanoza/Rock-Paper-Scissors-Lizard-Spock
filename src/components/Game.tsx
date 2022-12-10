import { Pentagon } from "images";
import styled from "styled-components";
import { Scissors } from "svg";
import { GameCard } from "types";
import Card from "./Card";

const Game = () => {
  const scissors: GameCard = {
    name: "scissors",
    image: <Scissors />,
    colorTop: "#EB9F0E",
    colorBottom: "#C76C1B;",
  };
  return (
    <GameBox>
      <Card item={scissors} />
      <Middle></Middle>
    </GameBox>
  );
};

export default Game;

const GameBox = styled.div`
  width: 311px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
  background: url(${Pentagon});
  background-repeat: no-repeat;
  background-position: center;
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
