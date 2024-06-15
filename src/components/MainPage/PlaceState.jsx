import styled from "styled-components";

const PlaceState = () => {
  return (
    <Container>
      <Digits>8자리</Digits>
      <StateText>(보통)</StateText>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "65px",
        }}
      >
        <p
          style={{
            color: "#464646",
            fontSize: "12px",
            marginRight: "8px",
          }}
        >
          1시간 기준
        </p>
        <PlaceText>5000원</PlaceText>
      </div>
    </Container>
  );
};

export default PlaceState;

const Container = styled.div`
  width: 334px;
  height: 39px;
  display: flex;
  align-items: center;
`;

const Digits = styled.p`
  font-size: 28px;
`;

const StateText = styled.p`
  color: blue;
  font-size: 28px;
`;
const PlaceText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
