import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BoxPlace = styled.div`
  width: 390px;
  height: auto;
  background-color: #ffffff;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: solid 1px #cacaca;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const PlaceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
`;

const BoxPlaceName = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;
`;

const ImgPlaceType = styled.div`
  width: 20px;
  height: 16px;
`;

const TextPlaceName = styled.div`
  font-size: 14px;
`;

const Address = styled.div`
  font-size: 12px;
  color: #a7a7a7;
`;

const BtnFun = styled.div`
  width: 18px;
  height: 18px;
`;

const Styles = {
  PlaceType: {
    width: "auto",
    height: "auto",
  },
  Function: {
    width: "auto",
    height: "auto",
  },
};

function PlaceList(props) {
  const [funcIcon, setFuncIcon] = useState(
    `${process.env.PUBLIC_URL}/sources/img/icons/bin.png`
  );

  useEffect(() => {
    if (props.funcType === "공영") {
      setFuncIcon(`${process.env.PUBLIC_URL}/sources/img/icons/bin.png`);
    }
    if (props.funcType === "나눔") {
      setFuncIcon(`${process.env.PUBLIC_URL}/sources/img/icons/erase.png`);
    }
    if (props.funcType === "delete") {
      setFuncIcon(`${process.env.PUBLIC_URL}/sources/img/icons/delete.png`);
    }
  }, [props.funcType]);

  return (
    <BoxPlace id={props.id} onClick={props.onMouseDown}>
      <PlaceInfo>
        <BoxPlaceName>
          <ImgPlaceType>
            <img
              src={props.type || `${process.env.PUBLIC_URL}/parkIcon.png`}
              style={Styles.PlaceType}
              alt="사진"
            />
          </ImgPlaceType>
          <TextPlaceName>{props.name || "장소이름"}</TextPlaceName>
        </BoxPlaceName>
        <Address>{props.address || "장소 주소"}</Address>
      </PlaceInfo>

      <BtnFun>
        <img src={funcIcon} style={Styles.Function} alt="사진" />
      </BtnFun>
    </BoxPlace>
  );
}

export default PlaceList;
