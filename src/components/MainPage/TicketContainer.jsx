import styled from "styled-components";
import TicketBox from "../atom/TicketBox";

const TicketContainer = ({ isTicketVisible }) => {
  return (
    <Container isTicketVisible={isTicketVisible.isVisible}>
      <div
        style={{
          display: "flex",
          marginBottom: "24px",
        }}
      >
        <TicketText>시흥시 공영 주차장</TicketText>
        <SplitLine />
        <ParkingType>공영주차장</ParkingType>
      </div>
      <TicketBox />
    </Container>
  );
};
export default TicketContainer;
const Container = styled.div`
  width: 390px;
  height: 210px;
  position: absolute;
  padding: 20px 28px;
  bottom: ${({ isTicketVisible }) => (isTicketVisible ? "0" : "-210px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.5s ease-in-out;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const TicketText = styled.p`
  font-size: 16px;
  color: #464646;
`;
const ParkingType = styled.p`
  font-size: 14px;
  color: #9f9f9f;
`;

const SplitLine = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  height: 16px;
  border-left: 1px solid #9f9f9f;
`;
