import { React, useState, useEffect } from "react";
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
  /////////////  props.id 리스트 아이템 순서 / props.type 주차장 종류 / props.name 주차장 이름 / props.address 주차장 주소 / props.funcType 아이템 기능

  const [funcIcon, setFuncIcon] = useState("./sources/img/icons/bin.png");

  const funcType = props.funcType;

  useEffect(() => {
    console.log(funcType);
    if (funcType === "normal") {
      setFuncIcon("./sources/img/icons/bin.png");
    }
    if (funcType === "erase") {
      setFuncIcon("./sources/img/icons/erase.png");
    }
    if (funcType === "delete") {
      setFuncIcon("./sources/img/icons/delete.png");
    }
  }, [funcType]);

  return (
    <div>
      <BoxPlace id={props.id}>
        <PlaceInfo>
          <BoxPlaceName>
            {/* <ImgPlaceType><img src={props.PlaceType} style={Styles.PlaceType}/></ImgPlaceType> */}
            <ImgPlaceType>
              <img
                src={props.type || "parkIcon.png"}
                style={Styles.PlaceType}
              />
            </ImgPlaceType>
            <TextPlaceName>{props.name || "장소이름"}</TextPlaceName>
          </BoxPlaceName>
          <Address>{props.address || "장소 주소"}</Address>
        </PlaceInfo>

        <BtnFun>
          <img src={funcIcon} style={Styles.Function} />
        </BtnFun>
        {/* <BtnFun
          onClick={() => {
            func();
          }}
        >
          <img
            src={props.funcType || "cancelIcon.png"}
            style={Styles.Function}
          />
        </BtnFun> */}
      </BoxPlace>
    </div>
  );
}
export default PlaceList;
