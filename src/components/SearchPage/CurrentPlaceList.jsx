import React from "react";
import styled from "styled-components";
import PlaceItem from "../atom/PlaceItem";

const ListBox = styled.div`
  height: 646px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 120px;
`;

// 파이어 베이스로 리스트 불러오기

const sample = [
  {
    id: 0,
    type: "./sources/img/icons/park.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 2,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 3,
    type: "./sources/img/icons/star.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 4,
    type: "./sources/img/icons/star.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
  {
    id: 1,
    type: "./sources/img/icons/normal.png",
    name: "시흥시 머시깽이",
    address: "시흥시 ~~~ ~~~",
  },
];

function CurrentPlaceList() {
  const funcType = "erase";

  return (
    <ListBox>
      {sample.map((p) => {
        return (
          <PlaceItem
            id={p.id}
            type={p.type}
            name={p.name}
            address={p.address}
            funcType={funcType}
          ></PlaceItem>
        );
      })}
    </ListBox>
  );
}

export default CurrentPlaceList;
