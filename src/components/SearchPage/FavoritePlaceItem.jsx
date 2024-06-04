import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  width: fit-content;
  display: flex;
  gap: 4px;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 20px;
  border: solid 1px #cacaca;
`;

const Place = styled.h1`
  font-size: 14px;
  line-height: 140%;
  color: #838383;
`;

function FavoritePlaceItem(p) {
  return (
    <FlexBox>
      <img src="../sources/img/icons/star.png" alt="" />
      <Place>{p.name || "나눔주차장1"}</Place>
    </FlexBox>
  );
}

export default FavoritePlaceItem;
