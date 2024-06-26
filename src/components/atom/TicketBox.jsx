import styled from "styled-components";

const TicketBox = ({ name, bg, scale, selected, onClick }) => {
  return (
    <Container bg={bg} scale={scale} selected={selected} onClick={onClick}>
      <TopBox>
        <TicketState>야간권</TicketState>
        <TicketDate>2024.05.23(오늘)</TicketDate>
      </TopBox>
      <MiddleBox>
        <PlaceTitle>{name || "고양이 주차장"}</PlaceTitle>
      </MiddleBox>
      <BottomBox>
        <ValidTime>18:30 ~ 23:30 주차 가능</ValidTime>
        <Price>5000원</Price>
      </BottomBox>
    </Container>
  );
};

export default TicketBox;

const Container = styled.div`
  width: 332px;
  height: 124px;
  border-radius: 8px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#959595")};
  background-color: ${({ selected }) => (selected ? "#3182f7" : "#EDECEC")};
  background: ${(p) => p.bg};
  padding: 17px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s;
  transform: ${(p) => p.scale};
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
`;
const MiddleBox = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;
const BottomBox = styled.div`
  align-items: center;
  display: flex;
`;

const TicketState = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
const TicketDate = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
`;

const PlaceTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const ValidTime = styled.p`
  font-size: 14px;
`;

const Price = styled.p`
  position: absolute;
  right: 14px;
  font-size: 20px;
`;
