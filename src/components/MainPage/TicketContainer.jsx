import styled from "styled-components";

const TicketContainer = ({ isTicketVisible }) => {
  return (
    <Container isTicketVisible={isTicketVisible}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
        }}
      ></div>
    </Container>
  );
};

export default TicketContainer;

const Container = styled.div`
  width: 390px;
  height: 210px;
  position: absolute;
  bottom: ${({ isTicketVisible }) => (isTicketVisible ? "0" : "-210px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.5s ease-in-out;
`;
