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
      <div style={{ display: "flex", gap: "0" }}>
        <Digits>{remainingDigits}자리</Digits>
        <StateText status={status}>({status})</StateText>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#464646",
            fontSize: "12px",
            marginRight: "8px",
            opacity: "0.6",
          }}
        >
          1시간 기준
        </p>
        <PlaceText>{info.price_per_10min}원</PlaceText>
      </div>
    </Container>
  );
};

export default PlaceState;

const Container = styled.div`
  width: 334px;
  height: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Digits = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: #464646;
`;

const StateText = styled.p`
  color: #3182f7;
  font-size: 28px;
  font-weight: 800;
  margin-left: 4px;
`;
const PlaceText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
