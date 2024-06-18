import React from "react";
import styled from "styled-components";
import PlaceItem from "../atom/PlaceItem";
import { ParkingLot } from "../../data/index";

const ListBox = styled.div`
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 120px;
`;

function SearchPlaceList({ query }) {
  const funcType = "normal";

  const filteredList = ParkingLot.filter((place) =>
    place.place_name.includes(query)
  );

  return (
    <ListBox>
      {filteredList.map((p) => (
        <PlaceItem
          key={p.parking_lot_id}
          id={p.parking_lot_id}
          type="./sources/img/icons/normal.png"
          name={p.place_name}
          address={p.address}
          funcType={funcType}
        />
      ))}
    </ListBox>
  );
}

export default SearchPlaceList;
