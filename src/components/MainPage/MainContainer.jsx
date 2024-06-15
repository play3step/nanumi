import React, { useRef, useState } from "react";
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

const MainContainer = () => {
  const { location, error } = useCurrentLocation();
  const nav = useNavigate();
  const mapRef = useRef(null);
  const [isTicketVisible, setTicketVisible] = useState(TicketState);

  const locations = [
    {
      latitude: location?.latitude,
      longitude: location?.longitude,
      title: "주차장 1",
      type: "나눔",
    },
    {
      latitude: location?.latitude + 0.011,
      longitude: location?.longitude + 0.004,
      title: "주차장 2",
      type: "공용",
    },
    {
      latitude: location?.latitude + 0.002,
      longitude: location?.longitude + 0.004,
      title: "주차장 3",
      type: "나눔",
    },
    {
      latitude: location?.latitude + 0.005,
      longitude: location?.longitude + 0.004,
      title: "주차장 4",
      type: "나눔",
    },
    {
      latitude: location?.latitude - 0.002,
      longitude: location?.longitude - 0.013,
      title: "주차장 5",
      type: "공용",
    },
  ];

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
    }));
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
        locations={locations}
        setTicketVisible={setTicketVisible}
      />
      <SearchContainer nav={nav} />
      <ParkingTicket
        onClick={toggleTicketContainer}
        isTicketVisible={isTicketVisible.isVisible}
      />
      {/* <ParkingContainer isTicketVisible={isTicketVisible} /> */}
      <TicketContainer isTicketVisible={isTicketVisible} />
      <ResetLocation
        handlerLocation={handlerLocation}
        isTicketVisible={isTicketVisible.isVisible}
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
