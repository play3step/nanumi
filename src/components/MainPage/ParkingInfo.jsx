import styled from "styled-components";

const ParkingInfo = ({ info }) => {
  const remainingDigits = info.total_digits - info.use_digit;
  const occupancyRate = (remainingDigits / info.total_digits) * 100;

  let status;
  if (occupancyRate <= 20) {
    status = "./pin/pin2.png";
  } else if (occupancyRate <= 50) {
    status = "./pin/pin1.png";
  } else {
    status = "./pin/pin3.png";
  }
  return (
    <Container>
      <TopBox>
        <PlaceStateImg src={status} />
        <PlaceTitle>{info.place_name}</PlaceTitle>
        <SplitLine />
        <PlaceState>{info.category}</PlaceState>
      </TopBox>
      <BottomBox>
        <PlaceLocation>{info.address}</PlaceLocation>
      </BottomBox>
    </Container>
  );
};

export default ParkingInfo;

const Container = styled.div`
  width: 334p;
  height: 49px;
  display: flex;
  flex-direction: column;
`;
const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

const BottomBox = styled.div`
  margin-top: 4px;
`;

const PlaceStateImg = styled.img`
  width: 18px;
  height: 18px;
`;
const PlaceTitle = styled.p`
  font-size: 16px;
  margin-left: 4px;
`;
const SplitLine = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  height: 16px;
  border-left: 1px solid #9f9f9f;
`;
const PlaceState = styled.p`
  font-size: 14px;
  color: #9f9f9f;
`;

const PlaceLocation = styled.p`
  font-size: 12px;
  color: #464646;
`;
