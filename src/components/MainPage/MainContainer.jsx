import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import Map from "./Map";
import SearchContainer from "./SearchContainer";
import ResetLocation from "./ResetLoctaion";
import ParkingTicket from "./ParkingTicket";
import ParkingContainer from "./ParkingContainer";
import { TicketState } from "../../store/recoil";
import { useNavigate } from "react-router-dom";
import TicketContainer from "./TicketContainer";
import { ParkingLot } from "../../data";

import TimeFilterContainer from "./TimeFilter";

const MainContainer = () => {
  const { location, error } = useCurrentLocation();
  const nav = useNavigate();
  const mapRef = useRef(null);
  const [isTicketVisible, setTicketVisible] = useState(TicketState);
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setIsDown] = useState("92px");

  const [time, setTime] = useState("1시간");
  const [price, setPrice] = useState(6);

  useEffect(() => {
    if (time === "30분") {
      setPrice(3);
    } else if (time === "1시간") {
      setPrice(6);
    } else if (time === "2시간") {
      setPrice(12);
    } else if (time === "3시간") {
      setPrice(18);
    } else if (time === "4시간") {
      setPrice(24);
    }
  }, [time]);

  useEffect(() => {
    if (isOpen === true) {
      setIsDown("140px");
    } else setIsDown("92px");
  }, [isOpen]);

  const handlerLocation = () => {
    if (mapRef.current && location) {
      mapRef.current.setCenter(
        new window.naver.maps.LatLng(location.latitude, location.longitude)
      );
    }
  };

  const toggleTicketContainer = () => {
    setTicketVisible((prev) => ({
      ...prev,
      isVisible: !prev.isVisible,
      type: "티켓",
    }));
  };

  const handleClick = (select) => {
    setSelected((prev) => (prev === select ? null : select));
  };

  const handleClick2 = (select) => {
    setSelected2((prev) => (prev === select ? null : select));
  };

  const getFilteredLocations = () => {
    if (selected === null) {
      return ParkingLot;
    } else if (selected === 1) {
      return ParkingLot.filter((lot) => lot.price_per_10min === 0);
    } else if (selected === 2) {
      return ParkingLot.filter((lot) => lot.price_per_10min > 0);
    } else if (selected === 3) {
      return ParkingLot.filter((lot) => lot.category === "나눔");
    }
    return ParkingLot;
  };

  if (!location) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <ErrorText>Error: {error}</ErrorText>;
  }

  return (
    <MapContainer>
      <Map
        ref={mapRef}
        location={location}
        locations={getFilteredLocations()}
        setTicketVisible={setTicketVisible}
        time={time}
        price={price}
      />
      <SearchContainer
        nav={nav}
        selected={selected}
        handleClick={handleClick}
        open={setIsOpen}
      />
      <TimeFilterContainer
        selected={selected2}
        handleClick={handleClick2}
        isDown={isDown}
        setTime={setTime}
      ></TimeFilterContainer>
      <ParkingTicket
        onClick={toggleTicketContainer}
        isTicketVisible={isTicketVisible}
      />
      {isTicketVisible.type === "주차장" ? (
        <ParkingContainer
          isTicketVisible={isTicketVisible}
          ParkingLot={ParkingLot}
        />
      ) : (
        <TicketContainer isTicketVisible={isTicketVisible} />
      )}
      <ResetLocation
        handlerLocation={handlerLocation}
        isTicketVisible={isTicketVisible}
      />
    </MapContainer>
  );
};

export default MainContainer;

const MapContainer = styled.div`
  width: 390px;
  height: 844px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border: 1px solid;
  overflow: hidden;
`;

const Loading = styled.div`
  width: 100%;
  height: 844px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const ErrorText = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;
