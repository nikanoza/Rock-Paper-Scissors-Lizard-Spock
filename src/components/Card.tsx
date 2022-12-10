import styled from "styled-components";
import { GameCard } from "types";

const Card: React.FC<{ item: GameCard }> = (props) => {
  return (
    <CardBox bgColor={props.item.colorBottom} hover={props.item.colorTop}>
      <MainCircle bgColor={props.item.colorTop} hover={props.item.colorTop}>
        <GrayCircle>
          <WhiteCircle>{props.item.image}</WhiteCircle>
        </GrayCircle>
      </MainCircle>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div(
  (props: { bgColor: string; hover: string }) => `
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: ${props.bgColor};
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    cursor:pointer;
    &:hover ${WhiteCircle}{
      background: #3B4262;
    };
    &:hover path {
      fill: ${props.hover};
    };
`
);

const MainCircle = styled(CardBox)(
  (props: { bgColor: string; hover: string }) => `
    height: 92.7px;
    background-color: ${props.bgColor};
    display: flex;
    justify-content:center;
    align-items: center;
`
);

const GrayCircle = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background-color: #babfd4;
  margin-top: 1px;
  display: flex;
`;

const WhiteCircle = styled.div`
  width: 100%;
  height: 68.81px;
  border-radius: 50%;
  background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
