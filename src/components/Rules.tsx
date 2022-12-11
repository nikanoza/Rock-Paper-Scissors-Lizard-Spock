import { RulesSchema } from "images";
import styled from "styled-components";
import { Close } from "svg";

const Rules: React.FC<{ setShowRules: (bool: boolean) => void }> = (props) => {
  return (
    <Modal>
      <Info>
        <TitleDiv>
          <Title>rules</Title>
          <CloseDesktop>
            <Close onClick={() => props.setShowRules(false)} />
          </CloseDesktop>
        </TitleDiv>
        <Schema src={RulesSchema} />
        <CloseMobile>
          <Close onClick={() => props.setShowRules(false)} />
        </CloseMobile>
      </Info>
    </Modal>
  );
};

export default Rules;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, 0.3);
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 400px;
    height: auto;
    padding: 32px 32px 47px 32px;
    justify-content: flex-start;
    border-radius: 8px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #3b4262;
  text-transform: uppercase;
`;

const Schema = styled.img`
  margin-top: 96px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const CloseMobile = styled.div`
  margin-top: 137px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
