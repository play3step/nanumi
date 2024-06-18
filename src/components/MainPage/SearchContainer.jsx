import { useState } from "react";

import styled from "styled-components";
import MainIcon from "./atom/MainIcon";
import CategoryBtn from "./atom/CategoryBtn";

const SearchContainer = ({
  nav,
  selected,
  open,
  handleClick,
  searchText,
  resetFilter,
}) => {
  const [timeSelect, setTimeSelect] = useState(false);
  const [timeColor, setTimeColor] = useState("#909090");
  const [timeBg, setTimeBg] = useState("#f3f3f3");

  const [timeImg, setTImeImg] = useState(
    process.env.PUBLIC_URL + "/icon/dn_unselect.png"
  );
  const [openRotate, setOpenRotate] = useState("rotate(0deg)");
  return (
    <Container>
      <SearchHeader>
        {searchText ? (
          <MainIcon type="back" onClick={resetFilter} />
        ) : (
          <MainIcon type="person" onClick={() => nav(`/profile`)} />
        )}
        <SearchText onClick={() => nav(`/search`)}>
          {searchText || " 목적지/주차장을 검색해주세요."}
        </SearchText>
        <AlertPostion>
          <MainIcon type="alert" onClick={() => nav(`/notification`)} />
        </AlertPostion>
      </SearchHeader>
      <CategoryContainer>
        <CategoryleftBox>
          <CategoryBtn
            text="무료"
            selected={selected === 1}
            onClick={() => handleClick(1)}
          />
          <CategoryBtn
            text="유료"
            selected={selected === 2}
            onClick={() => handleClick(2)}
          />
          <CategoryBtn
            text="나눔주차장"
            selected={selected === 3}
            onClick={() => handleClick(3)}
          />
        </CategoryleftBox>
        <CategoryTimeBtn
          bg={timeBg}
          color={timeColor}
          onClick={() => {
            if (timeSelect === false) {
              setTimeColor("#3182F7");
              setTimeBg("#E3F0FF");
              setOpenRotate("rotate(180deg)");
              setTimeSelect(true);
              setTImeImg(process.env.PUBLIC_URL + "/icon/dn_select.png");
              open(true);
            } else {
              setTimeColor("#909090");
              setTimeBg("#f3f3f3");
              setOpenRotate("rotate(0deg)");
              setTimeSelect(false);
              setTImeImg(process.env.PUBLIC_URL + "/icon/dn_unselect.png");
              open(false);
            }
          }}
        >
          이용시간
          <OpenBtn deg={openRotate} src={timeImg} alt="" />
        </CategoryTimeBtn>
      </CategoryContainer>
    </Container>
  );
};

export default SearchContainer;

const Container = styled.div`
  width: 358px;
  height: 96px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px 16px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const AlertPostion = styled.div`
  position: absolute;
  right: 22px;
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchText = styled.div`
  height: 22px;
  border-left: 1px solid #aad1ff;
  color: #a9a9a9;
  margin-left: 12px;

  padding: 2px 12px;
  vertical-align: middle;
  font-size: 16px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryleftBox = styled.div`
  display: flex;
  height: 32px;
  gap: 4px;
`;

const CategoryTimeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 20px;
  padding: 6px 14px;
  gap: 4px;
  color: ${(p) => p.color};
  border: solid 1px ${(p) => p.color};
  background: ${(p) => p.bg};
`;

const OpenBtn = styled.img`
  transition: all 0.3s;
  transform: ${(p) => p.deg};
`;
