import styled from "styled-components";
import MainIcon from "./atom/MainIcon";

const ParkingTicket = () => {
  return (
    <Container>
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
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
`;
