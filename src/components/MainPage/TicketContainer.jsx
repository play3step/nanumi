import styled from "styled-components";

const TicketContainer = ({ isTicketVisible }) => {
  return (
    <Container isTicketVisible={isTicketVisible.isVisible}>
      {isTicketVisible.content}
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
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #ffffff;
`;
