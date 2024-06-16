import React from "react";
import { styled } from "styled-components";
import ParkingTicketList from "./ParkingTicketList";
import { useNavigate } from "react-router-dom";
import TicketBox from "../atom/TicketBox";

const Container = styled.div`
  margin: 0px;
  height: 844px;
  padding: 0px;
  width: 390px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const ListContainer = styled.div`
  overflow: scroll;
  height: 438px;
  background-color: #ffffff;
`;
const ContentBox = styled.div`
  width: 321px;
  margin-right: auto;
  margin-left: auto;
`;
const BackTitle = styled.div`
  padding: 20px 20px;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const NameImgBox = styled.div`
  display: flex;
  margin-bottom: 28px;
`;
const MyImgBox = styled.div``;
const MyImg = styled.img`
  object-fit: cover;
  width: 98px;
  border-radius: 80px;
`;
const NameParking = styled.div`
  padding-left: 16px;
  width: 100%;
`;
const MyName = styled.div``;

const MyNameText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #555555;
  margin-bottom: 8px;
`;
const HappyParking = styled.div``;
const HappyParkingText = styled.p`
  font-size: 14px;
  font-weight: 300;
`;
const CarNumber = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 44px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 0px 5px #d9d9d9;
`;
const CarNumberTextB = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #3182f7;
  padding-left: 20px;
`;
const CarNumberText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #696969;
  padding-right: 20px;
`;

const MoblieNumber = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 44px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 5px #d9d9d9;
`;
const MoblieNumberTextB = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #3182f7;
  padding-left: 20px;
`;
const MoblieNumberText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #696969;
  padding-right: 20px;
`;
const CurrentListText = styled.p`
  font-size: 14px;
  font-weight: 700;
  padding: 16px 28px;
  margin: 0px;
`;
const PastListText = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 0px 28px;
`;
const PastListBox = styled.div`
  background-color: #ffffff;
  padding: 2px 0px;
  border-bottom: 1px solid #c3c3c3;
`;
const ListDate = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-top: 24px;
`;
const CurrentListImg = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
function Mypage(props) {
  // const {datas} = props;
  const nav = useNavigate();
  return (
    <>
      <Container>
        <BackTitle>
          <img
            src="./sources/img/icons/backBtn.png"
            alt=""
            onClick={() => nav(-1)}
          />
          내프로필
        </BackTitle>
        <ContentBox>
          <NameImgBox>
            <MyImgBox>
              <MyImg src="https://i.postimg.cc/jCYfVHcJ/00501111-20190121.jpg" />
            </MyImgBox>
            <NameParking>
              <MyName>
                <MyNameText>{props.userName || "사용자이름"}</MyNameText>
              </MyName>
              <HappyParking>
                <HappyParkingText>
                  나누미와 함께 <br></br> 편안한 주차하세요!
                </HappyParkingText>
              </HappyParking>
            </NameParking>
          </NameImgBox>
          <CarNumber>
            <CarNumberTextB>차량번호</CarNumberTextB>
            <CarNumberText>{props.carNumber || "12가 3728"}</CarNumberText>
          </CarNumber>
          <MoblieNumber>
            <MoblieNumberTextB>휴대폰 번호</MoblieNumberTextB>
            <MoblieNumberText>
              {props.mobileNumber || "010 - 0000 - 0000"}
            </MoblieNumberText>
          </MoblieNumber>
        </ContentBox>
        <CurrentListText>현재 이용 내역 확인</CurrentListText>
        <CurrentListImg>
          <TicketBox />
        </CurrentListImg>
        <PastListBox>
          <PastListText>과거 이용 내역 확인</PastListText>
        </PastListBox>
        <ListContainer>
          {/* {posts.map((data, index)=>{
                    return(
                <ParkingTicketList key={data.id} post={data} onClick={()=>onClickItem(data)}></ParkingTicketList>
                )})} */}
          <ContentBox>
            <ListDate>2024.05.23</ListDate>
            <ParkingTicketList />
            <ParkingTicketList />
            <ParkingTicketList />
          </ContentBox>
        </ListContainer>
      </Container>
    </>
  );
}
export default Mypage;
