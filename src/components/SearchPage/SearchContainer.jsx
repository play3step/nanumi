import { React, useState, useEffect } from "react";
import styled from "styled-components";
import FavoritePlaceItem from "./FavoritePlaceItem";
import CurrentPlaceList from "./CurrentPlaceList";
import SearchPlaceList from "./SearchPlaceList";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 390px;
  height: 844px;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  padding: 20px 20px;
  border-bottom: solid 1.4px #cacaca;
`;

const SearchInput = styled.input`
  width: 322px;
  height: 20px;
  font-size: 14px;
  line-height: 140%;
  border: none;
  background: white;
  outline: none;
`;

///////////////////////////////////////////////////////////////////////////////

const FavoriteTitle = styled.h1`
  font-size: 12px;
  line-height: 140%;
  font-weight: 300;
  color: #333;
  margin-left: 24px;
  margin-top: 16px;
`;

const FavoriteSection = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const FavoriteBox = styled.div`
  width: 312px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FavoriteList = styled.div`
  width: max-content;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  padding: 12px 0 12px 16px;
`;

const GoFavoritePage = styled.div`
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 4px 14px 4px 12px;
`;

const GoFavoriteBtn = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////////////////////////////////////////////////////////////

const CurrentTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 24px;
  margin-top: 10px;
`;

const CurrentTitle = styled.p`
  font-size: 12px;
  line-height: 140%;
  font-weight: 300;
  color: #333;
`;

const CurrentAllDeleteBtn = styled.p`
  font-size: 12px;
  line-height: 140%;
  font-weight: 300;
  color: #464646;
  opacity: 0.4;
`;

const SearchListBox = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
  border-top: 1px solid #cacaca;
  position: absolute;
  transition: all 0.4s ease-in-out;
  top: 60px;
  transform: translateY(calc(100vh - ${(p) => p.slide}));
`;

/////////// 파이어베이스 연결시 아래 array 삭제

const sample = [
  "나눔주차장1",
  "나눔주차장2",
  "나눔주차장3",
  "나눔주차장4",
  "나눔주차장5",
  "나눔주차장6",
];

function SearchContainer() {
  const [isOn, setIsOn] = useState(false);
  const [slideVal, setSlideVal] = useState("0");
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    isOn ? setSlideVal("60px") : setSlideVal("0");
  }, [isOn]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      nav("/", { state: { query } }); // 검색어를 상태로 전달하여 네비게이션
    }
  };

  return (
    <Container>
      {/* 검색 부분 */}
      <SearchBar>
        <img
          src="./sources/img/icons/backBtn.png"
          alt="사진"
          onClick={() => nav(-1)}
        />
        <SearchInput
          onFocus={() => setIsOn(true)}
          onBlur={() => setIsOn(false)}
          type="text"
          placeholder="목적지/주차장을 입력해주세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리 추가
        />
      </SearchBar>

      {/* 즐겨찾기 부분 */}
      <FavoriteTitle>즐겨찾기</FavoriteTitle>
      <FavoriteSection>
        <FavoriteBox>
          <FavoriteList>
            {sample.map((p, index) => (
              <FavoritePlaceItem key={index} name={p} />
            ))}
          </FavoriteList>
        </FavoriteBox>
        <GoFavoritePage>
          <GoFavoriteBtn>
            <img
              style={{ transform: "rotate(180deg)" }}
              src="./sources/img/icons/backBtn.png"
              alt="사진"
            />
          </GoFavoriteBtn>
        </GoFavoritePage>
      </FavoriteSection>

      {/* 최근 검색 기록 부분 */}
      <CurrentTitleBox>
        <CurrentTitle>최근 검색 기록</CurrentTitle>
        <CurrentAllDeleteBtn>전체 삭제</CurrentAllDeleteBtn>
      </CurrentTitleBox>
      <CurrentPlaceList />

      <SearchListBox slide={slideVal + "px"}>
        <SearchPlaceList query={query} />
      </SearchListBox>
    </Container>
  );
}

export default SearchContainer;
