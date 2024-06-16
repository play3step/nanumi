import styled from "styled-components";
import MainIcon from "./atom/MainIcon";
import CategoryBtn from "./atom/CategoryBtn";

const SearchContainer = ({ nav }) => {
  return (
    <Container>
      <SearchHeader>
        <MainIcon type="person" onClick={() => nav(`/profile`)} />
        <SearchText onClick={() => nav(`/search`)}>
          목적지/주차장을 검색해주세요.
        </SearchText>
        <MainIcon type="alert" onClick={() => nav(`/notification`)} />
      </SearchHeader>
      <CategoryContainer>
        <CategoryBtn text="무료" />
        <CategoryBtn text="유료" />
        <CategoryBtn text="나눔주차장" />
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
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SearchText = styled.div`
  width: 242px;
  height: 22px;
  border-left: 1px solid;
  color: #a9a9a9;
  margin-left: 12px;
  margin-right: 24px;
  padding: 2px 12px;
  vertical-align: middle;
`;

const CategoryContainer = styled.div`
  width: 217px;
  height: 32px;
  display: flex;
  gap: 8px;
`;
