import styled from "styled-components";

const ParkingInfo = () => {
  return (
    <Container>
      <TopBox>
        <PlaceStateImg />
        <PlaceTitle>나눔 주차장</PlaceTitle>
        <SplitLine />
        <PlaceState>나눔 주차장</PlaceState>
      </TopBox>
      <BottomBox>
        <PlaceLocation>경기 시흥시 조남동 695</PlaceLocation>
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

const PlaceStateImg = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid;
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
