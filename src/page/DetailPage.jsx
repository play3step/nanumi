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
  overflow: hidden;
`;
const ParkingLotImage = styled.div`
  width: 100%;
  height: 260px;
  background-color: #c0c0c0;
  position: absolute;
  top: 0;
  left: 0;
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
  position: relative;
  scrollbar-width: none;
  margin-top: 24px;
`;

//--------------------------------------------------------

const ImgSlide = styled.div`
  transition: all 0.3s;
  transform: ${(p) => p.slide};
`;

const VacancyNotClickedLeft = styled.div`
  position: absolute;
  left: 0px;
  z-index: 2;
  transition: all 0.3s;
  transform: ${(p) => p.scale};
`;

const VacancyClicked = styled.div`
  position: absolute;
  left: 248px;
  z-index: ${(p) => p.zIndex};
  transition: all 0.3s;
  transform: ${(p) => p.scale};
`;

const VacancyNotClickedRight = styled.div`
  position: absolute;
  left: 496px;
  z-index: 0;
  transition: all 0.3s;
  transform: ${(p) => p.scale};
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
  background-color: ${({ selected }) => (selected ? "#2c4064" : "#d0d0d0")};
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
  margin-bottom: 16px;
  gap: 12px;
  justify-content: center;
`;
const Week = styled.div`
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  border-radius: 50px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  background-color: ${({ selected }) => (selected ? "#3182f7" : "#ffffff")};
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

//-------------------------------------------------------------------------------------------

const LeftBox = styled.div`
  width: 68px;
  height: 234px;
  position: absolute;
  left: 0;
  top: 320px;
  z-index: 3;
  opacity: 0.4;
`;

const RightBox = styled.div`
  width: 68px;
  height: 234px;
  position: absolute;
  right: 0;
  top: 320px;
  z-index: 3;
  opacity: 0.4;
`;

const LeftBox2 = styled.div`
  width: 68px;
  height: 176px;
  position: absolute;
  left: 0;
  top: 52px;
  z-index: 3;
  opacity: 0.4;
`;

const RightBox2 = styled.div`
  width: 68px;
  height: 176px;
  position: absolute;
  right: 0;
  top: 52px;
  z-index: 3;
  opacity: 0.4;
`;

const ParkingImgList = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  transition: all 0.3s;
  transform: ${(p) => p.move};
`;

const ParkingImg = styled.div`
  width: 390px;
  height: 100%;
  background: url(${(p) => p.background});
`;

const ParkingImgNum = styled.div`
  font-weight: 800;
  font-size: 14px;
  box-sizing: border-box;
  padding: 8px 14px;
  color: #333;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.6);
  border: solid 1px #333;
  position: absolute;
  z-index: 4;
  bottom: 42px;
  right: 24px;
`;

//-------------------------------------------------------------------------------------------

const weekImages = {
  1: `${process.env.PUBLIC_URL}/VistorDataGraph/Mon.png`,
  2: `${process.env.PUBLIC_URL}/VistorDataGraph/Tue.png`,
  3: `${process.env.PUBLIC_URL}/VistorDataGraph/Wed.png`,
  4: `${process.env.PUBLIC_URL}/VistorDataGraph/Thu.png`,
  5: `${process.env.PUBLIC_URL}/VistorDataGraph/Fri.png`,
  6: `${process.env.PUBLIC_URL}/VistorDataGraph/Sat.png`,
  7: `${process.env.PUBLIC_URL}/VistorDataGraph/Sun.png`,
};

const weekDate = {
  1: `2024.05.12`,
  2: `2024.05.13`,
  3: `2024.05.14`,
  4: `2024.05.15`,
  5: `2024.05.16`,
  6: `2024.05.17`,
  7: `2024.05.18`,
};

function DetailPage(props) {
  const nav = useNavigate();
  const params = useParams();
  const Info = ParkingLot.find((v) => v.parking_lot_id === parseInt(params.id));
  const [selectedTicket, setSelectedTicket] = useState(null);
  const handleTicketClick = (ticketId) => {
    setSelectedTicket(ticketId);
  };

  // 주차장 이미지 관련 -----------------------------------------------------------------------------------

  const [imgCount2, setImgCount2] = useState(0);
  const [imgMove, setImgMove] = useState("translateX(0px)");

  const countUp2 = () => {
    if (imgCount2 < 3) {
      setImgCount2(imgCount2 + 1);
    }
  };

  const countDown2 = () => {
    if (imgCount2 > 0) {
      setImgCount2(imgCount2 - 1);
    }
  };

  // 주차장 약도 관련 -----------------------------------------------------------------------------------

  const [floor, setFloor] = useState("1층");

  const [imgSlide, setImgSlide] = useState("translateX(-172px)");

  const [imgCount, setImgCount] = useState(1);

  const [img1, setImg1] = useState(
    process.env.PUBLIC_URL + "/parkingImg/B1F_Gray.svg"
  );
  const [img2, setImg2] = useState(
    process.env.PUBLIC_URL + "/parkingImg/B2F_Blue.svg"
  );
  const [img3, setImg3] = useState(
    process.env.PUBLIC_URL + "/parkingImg/B3F_Gray.svg"
  );

  const [scale1, setScale1] = useState("scale(1)");
  const [scale2, setScale2] = useState("scale(1.2)");
  const [scale3, setScale3] = useState("scale(1)");

  const [zIndex, setZIndex] = useState("2");

  const countUp = () => {
    if (imgCount < 2) {
      setImgCount(imgCount + 1);
    }
  };

  const countDown = () => {
    if (imgCount > 0) {
      setImgCount(imgCount - 1);
    }
  };

  // ------------------------------------------------------------------------------------------------------

  const [selectedWeek, setselectedWeek] = useState(1);
  const selectedWeekClick = (WeekId) => {
    setselectedWeek(WeekId);
  };

  if (!Info) {
    return <div>해당 주차장을 찾을 수 없습니다.</div>;
  }
  // console.log(Info);

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
              <LeftBox2
                onClick={() => {
                  countDown2();
                  if (imgCount2 === 1) {
                    setImgMove("translateX(0px)");
                  } else if (imgCount2 === 2) {
                    setImgMove("translateX(-390px)");
                  } else if (imgCount2 === 3) {
                    setImgMove("translateX(-780px)");
                  }
                }}
              ></LeftBox2>
              <RightBox2
                onClick={() => {
                  countUp2();
                  if (imgCount2 === 0) {
                    setImgMove("translateX(-390px)");
                  } else if (imgCount2 === 1) {
                    setImgMove("translateX(-780px)");
                  } else if (imgCount2 === 2) {
                    setImgMove("translateX(-1170px)");
                  }
                }}
              ></RightBox2>
              <ParkingImgNum>{imgCount2 + 1}/4</ParkingImgNum>
              <ParkingImgList move={imgMove}>
                {Info.parking_lot_image.map((p) => {
                  return (
                    <ParkingImg
                      background={
                        process.env.PUBLIC_URL + "/parking/" + p + ".jpg"
                      }
                    ></ParkingImg>
                  );
                })}
              </ParkingImgList>
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

                <Floor>{floor}</Floor>

                <LeftBox
                  onClick={() => {
                    countDown();
                    if (imgCount === 1) {
                      setFloor("B1층");
                      setImgSlide("translateX(72px)");
                      setImg1(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Blue.svg"
                      );
                      setImg2(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Gray.svg"
                      );
                      setScale1("scale(1.2)");
                      setScale2("scale(1)");
                      setZIndex("0");
                    }
                    if (imgCount === 2) {
                      setFloor("1층");
                      setImgSlide("translateX(-172px)");
                      setImg3(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Gray.svg"
                      );
                      setImg2(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Blue.svg"
                      );
                      setScale3("scale(1)");
                      setScale2("scale(1.2)");
                      setZIndex("3");
                    }
                  }}
                ></LeftBox>
                <RightBox
                  onClick={() => {
                    countUp();
                    if (imgCount === 0) {
                      setFloor("1층");
                      setImgSlide("translateX(-172px)");
                      setImg1(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Gray.svg"
                      );
                      setImg2(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Blue.svg"
                      );
                      setScale1("scale(1)");
                      setScale2("scale(1.2)");
                      setZIndex("3");
                    }
                    if (imgCount === 1) {
                      setFloor("2층");
                      setImgSlide("translateX(-418px)");
                      setImg3(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Blue.svg"
                      );
                      setImg2(
                        process.env.PUBLIC_URL + "/parkingImg/B1F_Gray.svg"
                      );
                      setScale3("scale(1.2)");
                      setScale2("scale(1)");
                      setZIndex("0");
                    }
                  }}
                ></RightBox>

                <ParkingSpaceImg>
                  <ImgSlide slide={imgSlide}>
                    <VacancyNotClickedLeft scale={scale1}>
                      <img src={img1} alt="사진" />
                    </VacancyNotClickedLeft>
                    <VacancyClicked zIndex={zIndex} scale={scale2}>
                      <img src={img2} alt="사진" />
                    </VacancyClicked>
                    <VacancyNotClickedRight scale={scale3}>
                      <img src={img3} alt="사진" />
                    </VacancyNotClickedRight>
                  </ImgSlide>
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
                <BuyButton selected={selectedTicket !== null}>
                  주차권 구매
                </BuyButton>
              </TicketContainer>

              <VisitorData>
                <VisitorTitleBox>
                  <VisitorTitle>방문자 데이터</VisitorTitle>
                  <VisitorDate>{weekDate[selectedWeek]}</VisitorDate>
                </VisitorTitleBox>
                <VisitorSubTitle>시간별 인기도</VisitorSubTitle>
                <ImgData>
                  <img src={weekImages[selectedWeek]} alt="사진" />
                </ImgData>
                <WeekList>
                  <Week
                    selected={selectedWeek === 1}
                    onClick={() => selectedWeekClick(1)}
                  >
                    월
                  </Week>
                  <Week
                    selected={selectedWeek === 2}
                    onClick={() => selectedWeekClick(2)}
                  >
                    화
                  </Week>
                  <Week
                    selected={selectedWeek === 3}
                    onClick={() => selectedWeekClick(3)}
                  >
                    수
                  </Week>
                  <Week
                    selected={selectedWeek === 4}
                    onClick={() => selectedWeekClick(4)}
                  >
                    목
                  </Week>
                  <Week
                    selected={selectedWeek === 5}
                    onClick={() => selectedWeekClick(5)}
                  >
                    금
                  </Week>
                  <Week
                    selected={selectedWeek === 6}
                    onClick={() => selectedWeekClick(6)}
                  >
                    토
                  </Week>
                  <Week
                    selected={selectedWeek === 7}
                    onClick={() => selectedWeekClick(7)}
                  >
                    일
                  </Week>
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
