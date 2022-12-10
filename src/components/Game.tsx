import { Pentagon } from "images";
import styled from "styled-components";
import { Lizard, Paper, Rock, Scissors, Spock } from "svg";
import { GameCard } from "types";
import Card from "./Card";

const Game = () => {
  const scissors: GameCard = {
    name: "scissors",
    image: <Scissors />,
    colorTop: "#EB9F0E",
    colorBottom: "#C76C1B",
  };

  const spock: GameCard = {
    name: "spock",
    image: <Spock />,
    colorTop: "#3FB7CD",
    colorBottom: "#2D8DAB",
  };

  const paper: GameCard = {
    name: "paper",
    image: <Paper />,
    colorTop: "#4664F4",
    colorBottom: "#2A45C2",
  };

  const lizard: GameCard = {
    name: "lizard",
    image: <Lizard />,
    colorTop: "#834EE3",
    colorBottom: "#5F37A8",
  };

  const rock: GameCard = {
    name: "rock",
    image: <Rock />,
    colorTop: "#DB2E4D",
    colorBottom: "#9D1634",
  };

  return (
    <GameBox>
      <Card item={scissors} />
      <Middle>
        <Card item={spock} />
        <Card item={paper} />
      </Middle>
      <Bottom>
        <Card item={lizard} />
        <Card item={rock} />
      </Bottom>
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
  background-size: 227px 227px;
  @media (min-width: 768px) {
    margin-top: 48px;
    width: 472px;
    background-size: 345px 345px;
  } ;
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -11px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 33px;
  margin-top: 26px;
`;
