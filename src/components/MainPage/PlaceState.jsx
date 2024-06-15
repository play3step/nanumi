import styled from "styled-components";

const PlaceState = ({ info }) => {
  const remainingDigits = info.total_digits - info.use_digit;
  const occupancyRate = (remainingDigits / info.total_digits) * 100;

  let status;
  if (occupancyRate <= 20) {
    status = "혼잡";
  } else if (occupancyRate <= 50) {
    status = "보통";
  } else {
    status = "여유";
  }
  return (
    <Container>
      <Digits>{remainingDigits}자리</Digits>
      <StateText status={status}>{status}</StateText>
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
  color: #3182f7;
  font-size: 28px;
  margin-left: 4px;
`;
const PlaceText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
