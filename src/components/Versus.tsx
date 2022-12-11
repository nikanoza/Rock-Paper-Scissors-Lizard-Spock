import { determineWinner, housePicked } from "helpers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { GameCard } from "types";
import Card from "./Card";

const Versus: React.FC<{
  user: GameCard | null;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  setUserChoice: (param: null) => void;
}> = (props) => {
  const [house, setHouse] = useState<GameCard | null>(null);
  const [result, SetResult] = useState<"win" | "draw" | "lose" | null>(null);

  useEffect(() => {
    if (!house) {
      const randomCard: GameCard = housePicked();
      setHouse(randomCard);
    }

    if (house && !result) {
      setTimeout(() => {
        const check = determineWinner(props.user?.name!, house?.name);
        SetResult(check);
        if (check === "win") {
          props.setScore((num) => num + 1);
        }
        if (check === "lose" && props.score > 0) {
          props.setScore((num) => num - 1);
        }
      }, 2000);
    }
  }, [house, props, props.user?.name, result]);

  return (
    <VersusContainer>
      <SideBoxes>
        <Side>
          <PickedDesktop>you picked</PickedDesktop>
          {props.user ? <Card item={props.user} /> : null}
          <PickedMobile>you picked</PickedMobile>
        </Side>
        {result ? (
          <ResultBoxDesktop>
            <ResultText>
              {result === "win"
                ? "you win"
                : result === "lose"
                ? "you lose"
                : "draw"}
            </ResultText>
            <Again
              result={result}
              onClick={() => {
                props.setUserChoice(null);
              }}
            >
              play again
            </Again>
          </ResultBoxDesktop>
        ) : null}
        <Side>
          <PickedDesktop>the house picked</PickedDesktop>
          <AnimatedPicked>
            {house ? <Card item={house} /> : null}
          </AnimatedPicked>
          <PickedMobile>the house picked</PickedMobile>
          <Circle />
        </Side>
      </SideBoxes>
      {result ? (
        <ResultBoxMobile>
          <ResultText>
            {result === "win"
              ? "you win"
              : result === "lose"
              ? "you lose"
              : "draw"}
          </ResultText>
          <Again
            result={result}
            onClick={() => {
              props.setUserChoice(null);
            }}
          >
            play again
          </Again>
        </ResultBoxMobile>
      ) : null}
    </VersusContainer>
  );
};

export default Versus;

const VersusContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const PickedMobile = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1.88px;
  color: white;
  margin-top: 17px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PickedDesktop = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 3px;
  color: white;
  display: none;
  margin-bottom: 63px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const AnimatedPicked = styled.div`
  opacity: 0;
  z-index: 2;
  animation: picked 1s forwards;
  animation-delay: 1s;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 11.32px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    top: 135px;
  }
`;

const ResultBoxMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ResultBoxDesktop = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 0;
  opacity: 0;
  animation: again 2s forwards;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const ResultText = styled.h1`
  text-transform: uppercase;
  font-size: 56px;
  font-weight: 700;
  line-height: 67.2px;
  color: white;
`;

const Again = styled.button(
  (props: { result: "win" | "draw" | "lose" }) => `
  width: 220px;
  height: 48px;
  border: none;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: 2.5px;
  color: #3B4262;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    color: ${
      props.result === "win"
        ? "#2d9646"
        : props.result === "lose"
        ? "#DB2E4D"
        : "#3B4262"
    };
  };
`
);
