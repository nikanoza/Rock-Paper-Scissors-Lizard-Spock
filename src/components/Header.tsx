import styled from "styled-components";

const Header: React.FC<{ score: number }> = (props) => {
  return (
    <HeaderElement>
      <Texts>
        <span>rock</span>
        <span>paper</span>
        <span>scissors</span>
        <span>lizard</span>
        <span>spock</span>
      </Texts>
      <ScoreBox>
        <ScoreText>score</ScoreText>
        <Score>{props.score}</Score>
      </ScoreBox>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  width: 100%;
  height: 96px;
  border: 3px solid rgba(255, 255, 255, 0.289199);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 12px;
`;

const Texts = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 10px;
  text-transform: uppercase;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ScoreBox = styled.div`
  width: 80px;
  height: 72px;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreText = styled.h3`
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 1.56px;
  color: #2a45c2;
  text-transform: uppercase;
`;

const Score = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  color: #565468;
`;
