import { Game, Header } from "components";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <Wrapper>
      <Header score={score} />
      <Game />
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
