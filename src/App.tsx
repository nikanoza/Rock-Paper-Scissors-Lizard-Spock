import { Game, Header, Rules, Versus } from "components";
import { useState } from "react";
import styled from "styled-components";
import { GameCard } from "types";

function App() {
  const [score, setScore] = useState<number>(0);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [userChoice, setUserChoice] = useState<GameCard | null>(null);

  return (
    <Wrapper>
      <Header score={score} />
      {userChoice ? (
        <Versus
          user={userChoice}
          setScore={setScore}
          setUserChoice={setUserChoice}
        />
      ) : (
        <Game setUserChoice={setUserChoice} />
      )}
      <RulesBtn
        onClick={() => {
          setShowRules(true);
        }}
      >
        <ButtonText>rules</ButtonText>
      </RulesBtn>
      {showRules ? <Rules setShowRules={setShowRules} /> : null}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  padding-bottom: 56px;
  background-image: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
`;

const RulesBtn = styled.button`
  width: 128px;
  height: 48px;
  border: 1px solid white;
  background-color: transparent;
  margin-top: auto;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  }
  &:hover span {
    color: #3b4262;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: 2.5px;
  color: white;
`;
