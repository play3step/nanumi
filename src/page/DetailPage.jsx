import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ParkingLot } from "../data/index";
import TicketBox from "../components/atom/TicketBox";

const Container = styled.div`
  width: 390px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: solid 1px #d0d0d0;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
const ParkingLotImage = styled.div`
  width: 100%;
  height: 260px;
  background-color: #c0c0c0;
  position: absolute;
  top: 0;
`;
const DetailContainer = styled.div`
  width: 390px;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  margin-top: 234px;
  padding: 30px 0;
  border-radius: 16px 16px 0 0;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`;
const BoxTitle = styled.div`
  width: 312px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;
const Bookmark = styled.div`
  width: 24px;
  height: 24px;
`;
const PlaceName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Floor = styled.div`
  font-size: 16px;
  color: #1f97f3;
`;
const ParkingSpaceImg = styled.div`
  width: 100%;
  height: 224px;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: none;
`;
const VacancyNotClicked_left = styled.div`
  position: absolute;
  top: 12px;
  left: -100px;
`;
const VacancyNotClicked_right = styled.div`
  position: absolute;
  top: 12px;
  left: 300px;
`;
const VacancyClicked = styled.div`
  position: absolute;
  top: -18px;
  left: 40px;
`;
const BlankSpace = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding: 10px 12px;
  border-radius: 50px;
  border: solid 1px #000000;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 22px;
  top: 180px;
`;
const TextInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 10px;
  flex-direction: column;
  width: 340px;
`;
const BoxInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: row;
`;
const ParkingInfo = styled.div`
  font-size: 16px;
  color: #1f97f3;
`;
const ParkingInfoBlue = styled.div`
  font-size: 16px;
  color: #1f97f3;
`;
const ParkingIcon = styled.div`
  width: 30px;
  height: 30px;
`;

const TicketContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const BuyButton = styled.div`
  width: 342px;
  height: 50px;
  background-color: #2c4064;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

//방문자 데이터
const VisitorData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 16px 16px 16px;
  width: 346px;
  height: auto;
  background-color: #ffffff;
  border: solid 1px #d0d0d0;
`;
const VisitorTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;
const VisitorTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const VisitorDate = styled.div`
  font-size: 14px;
  color: #5b5b5b;
`;
const VisitorSubTitle = styled.div`
  width: 100%;
  font-size: 12px;
  margin-bottom: 20px;
  text-align: left;
  color: #9e9e9e;
`;
const ImgData = styled.div`
  width: 312px;
  height: 166px;
  background-color: #000000;
  margin-bottom: 20px;
`;
const WeekList = styled.div`
  width: 312px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 16px;
  justify-content: center;
`;
const WeekClicked = styled.div`
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  background-color: #3182f7;
  border-radius: 50px;
  color: #ffffff;
`;
const Week = styled.div`
  font-size: 14px;
`;
const BackTitle = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  background-color: white;
`;

const DetailInfo = [
  {
    PlaceName: "시흥시 주차장",
    BlankSpace: "남은자리 3/10",
    Address: "경기도 시흥시 정왕동",
    Number: "031-1257-8541",
    Link: "www.youtube.com",
  },
];

function DetailPage(props) {
  const nav = useNavigate();
  const params = useParams();
  const Info = ParkingLot.find((v) => v.parking_lot_id === parseInt(params.id));
  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleTicketClick = (ticketId) => {
    setSelectedTicket(ticketId);
  };
  if (!Info) {
    return <div>해당 주차장을 찾을 수 없습니다.</div>;
  }
  console.log(Info);
  return (
    <div>
      {DetailInfo.map(function (props) {
        return (
          <Container>
            <BackTitle>
              <img
                src={`${process.env.PUBLIC_URL}/sources/img/icons/backBtn.png`}
                alt="사진"
                onClick={() => nav(-1)}
              />
            </BackTitle>
            <ParkingLotImage>
              <img
                src={`${process.env.PUBLIC_URL}/ParkingPhoto.png`}
                alt="사진"
                width={"100%"}
              />
            </ParkingLotImage>
            <DetailContainer>
              <InfoBox>
                <BoxTitle>
                  <Bookmark></Bookmark>
                  <PlaceName>{Info.place_name}</PlaceName>
                  <Bookmark>
                    <img
                      src={`${process.env.PUBLIC_URL}/Bookmark_icon.png`}
                      alt="사진"
                    />
                  </Bookmark>
                </BoxTitle>

                <Floor>1층</Floor>

                <ParkingSpaceImg>
                  <VacancyNotClicked_left>
                    <img
                      src={`${process.env.PUBLIC_URL}/VacancyNotClicked.png`}
                      alt="사진"
                    />
                  </VacancyNotClicked_left>
                  <VacancyNotClicked_right>
                    <img
                      src={`${process.env.PUBLIC_URL}/VacancyNotClicked.png`}
                      alt="사진"
                    />
                  </VacancyNotClicked_right>
                  <VacancyClicked>
                    <img
                      src={`${process.env.PUBLIC_URL}/VacancyClicked.png`}
                      alt="사진"
                    />
                  </VacancyClicked>
                  <BlankSpace>남은자리 3/10</BlankSpace>
                </ParkingSpaceImg>
              </InfoBox>

              <TextInfo>
                <BoxInfo>
                  <ParkingIcon>
                    <img
                      src={`${process.env.PUBLIC_URL}/Adress_icon.png`}
                      alt="사진"
                    />
                  </ParkingIcon>
                  <ParkingInfo>{Info.address}</ParkingInfo>
                </BoxInfo>
                <BoxInfo>
                  <ParkingIcon>
                    <img
                      src={`${process.env.PUBLIC_URL}/PhoneNumber_icon.png`}
                      alt="사진"
                    />
                  </ParkingIcon>
                  <ParkingInfoBlue>{Info.number}</ParkingInfoBlue>
                </BoxInfo>
                <BoxInfo>
                  <ParkingIcon>
                    <img
                      src={`${process.env.PUBLIC_URL}/Link_icon.png`}
                      alt="사진"
                    />
                  </ParkingIcon>
                  <ParkingInfoBlue>{props.Link}</ParkingInfoBlue>
                </BoxInfo>
              </TextInfo>

              <TicketContainer>
                <TicketBox
                  selected={selectedTicket === 1}
                  onClick={() => handleTicketClick(1)}
                />
                <TicketBox
                  selected={selectedTicket === 2}
                  onClick={() => handleTicketClick(2)}
                />
                <BuyButton>주차권 구매</BuyButton>
              </TicketContainer>

              <VisitorData>
                <VisitorTitleBox>
                  <VisitorTitle>방문자 데이터</VisitorTitle>
                  <VisitorDate>2024.05.25</VisitorDate>
                </VisitorTitleBox>
                <VisitorSubTitle>시간별 인기도</VisitorSubTitle>
                <ImgData>
                  <img
                    src={`${process.env.PUBLIC_URL}/VistorDataGraph.png`}
                    alt="사진"
                  />
                </ImgData>
                <WeekList>
                  <WeekClicked>월</WeekClicked>
                  <Week>화</Week>
                  <Week>수</Week>
                  <Week>목</Week>
                  <Week>금</Week>
                  <Week>토</Week>
                  <Week>일</Week>
                </WeekList>
              </VisitorData>
            </DetailContainer>
          </Container>
        );
      })}
    </div>
  );
}

export default DetailPage;
