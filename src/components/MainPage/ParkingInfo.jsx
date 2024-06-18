import styled from "styled-components";

const ParkingInfo = ({ info, pageNavHandle }) => {
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
    <Container onClick={pageNavHandle}>
      <TopBox>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0px", alignItems: "center" }}>
            <PlaceStateImg src={status} />
            <PlaceTitle>{info.place_name}</PlaceTitle>
          </div>
          <SplitLine />
          <PlaceState>{info.category}</PlaceState>
        </div>
        <div></div>
        <ParkingTicket>
          <img
            style={{ width: "12px", height: "12px" }}
            src={process.env.PUBLIC_URL + "/icon/ticket_noBg.png"}
            alt=""
          />
          <p>주차권 있음</p>
        </ParkingTicket>
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
  justify-content: space-between;
  align-items: start;
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
  font-weight: 800;
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

const ParkingTicket = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 14px;
  background-color: #d6e6fd;
  color: #3182f7;
`;

const PlaceLocation = styled.p`
  font-size: 12px;
  color: #464646;
  opacity: 0.6;
`;
