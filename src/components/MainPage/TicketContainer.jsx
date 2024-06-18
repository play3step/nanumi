import styled from "styled-components";
import TicketBox from "../atom/TicketBox";
import { useState } from "react";

const TicketContainer = ({ isTicketVisible, onClick }) => {
  const [count, setCount] = useState(1);
  const [move, setMove] = useState("translateX(0)");
  const [scale1, setScale1] = useState("scale(0.9)");
  const [scale2, setScale2] = useState("scale(1)");
  const [scale3, setScale3] = useState("scale(0.9)");
  const [img, setImg] = useState(process.env.PUBLIC_URL + "/dumi0.svg");
  const [bg, setBg] = useState("#3182f7");

  const countUp = () => {
    if (count < 2) {
      setCount(count + 1);
    }
  };

  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container isTicketVisible={isTicketVisible.isVisible}>
      <div
        style={{
          display: "flex",
          marginBottom: "24px",
        }}
      >
        <TicketText>시흥시 공영주차장</TicketText>
        <SplitLine />
        <ParkingType>공영주차장</ParkingType>
      </div>
      <CardList move={move}>
        <DumiImg scale={scale1} src={img} alt="" />
        <TicketBox bg={bg} scale={scale2} selected="true" onClick={onClick} />
        <DumiImg scale={scale3} src={img} alt="" />
      </CardList>
      <LeftBtn
        onClick={() => {
          countDown();
          if (count === 1) {
            setMove("translateX(330px)");
            setScale1("scale(1)");
            setScale2("scale(0.9)");
            setImg(process.env.PUBLIC_URL + "/dumi1.svg");
            setBg("#EDECEC");
          } else if (count === 2) {
            setMove("translateX(0)");
            setScale2("scale(1)");
            setScale3("scale(0.9)");
            setImg(process.env.PUBLIC_URL + "/dumi0.svg");
            setBg("#3182f7");
          }
        }}
      ></LeftBtn>
      <RightBtn
        onClick={() => {
          countUp();
          if (count === 0) {
            setMove("translateX(0)");
            setScale1("scale(0.9)");
            setScale2("scale(1)");
            setImg(process.env.PUBLIC_URL + "/dumi0.svg");
            setBg("#3182f7");
          } else if (count === 1) {
            setMove("translateX(-330px)");
            setScale2("scale(0.9)");
            setScale3("scale(1)");
            setImg(process.env.PUBLIC_URL + "/dumi1.svg");
            setBg("#EDECEC");
          }
        }}
      ></RightBtn>
    </Container>
  );
};
export default TicketContainer;
const Container = styled.div`
  width: 390px;
  height: 250px;
  position: absolute;
  padding: 20px 28px;
  bottom: ${({ isTicketVisible }) => (isTicketVisible ? "0" : "-250px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 0.5s ease-in-out;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

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

const CardList = styled.div`
  display: flex;
  align-items: center;
  transform: ${(p) => p.move};
  transition: all 0.3s;
`;

const DumiImg = styled.img`
  transition: all 0.3s;
  transform: ${(p) => p.scale};
`;

const LeftBtn = styled.div`
  width: 60px;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0.4;
`;

const RightBtn = styled.div`
  width: 60px;
  height: 100%;
  position: absolute;
  right: 0;
  opacity: 0.4;
`;
