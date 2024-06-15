import styled from "styled-components";
import ParkingInfo from "./ParkingInfo";
import PlaceState from "./PlaceState";

const ParkingContainer = ({ isTicketVisible, ParkingLot }) => {
  const Info = ParkingLot.find(
    (v) => v.parking_lot_id === isTicketVisible.parkingLotId
  );
  return (
    <Container isTicketVisible={isTicketVisible.isVisible}>
      <ParkingInfo info={Info} />
      <SplitLine />
      <PlaceState info={Info} />
    </Container>
  );
};

export default ParkingContainer;

const Container = styled.div`
  width: 390px;
  height: 152px;
  position: absolute;
  padding: 20px 28px;
  bottom: ${({ isTicketVisible }) => (isTicketVisible ? "0" : "-210px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.5s ease-in-out;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #ffffff;
`;

const SplitLine = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 334px;
  border-bottom: 1px solid #9f9f9f;
`;
