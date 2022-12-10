import { RulesSchema } from "images";
import styled from "styled-components";
import { Close } from "svg";

const Rules: React.FC<{ setShowRules: (bool: boolean) => void }> = (props) => {
  return (
    <Modal>
      <Info>
        <Title>rules</Title>
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
  position: absolute;
  top: 0;
  left: 0;
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
`;

const CloseMobile = styled.div`
  margin-top: 137px;
`;
