import styled from "styled-components";
import MainIcon from "./atom/MainIcon";

const ParkingTicket = ({ onClick, isTicketVisible }) => {
  return (
    <Container onClick={onClick} isTicketVisible={isTicketVisible}>
      <MainIcon type="ticket" />
      <p>주차권</p>
    </Container>
  );
};

export default ParkingTicket;

const Container = styled.button`
  width: 128px;
  height: 38px;
  background-color: #2c4064;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: absolute;
  border-radius: 20px;
  bottom: ${({ isTicketVisible }) => (isTicketVisible ? "270px" : "56px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.5s ease-in-out;
`;
