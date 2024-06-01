import styled from "styled-components";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import Map from "./Map";
import SearchContainer from "./SearchContainer";
import ResetLocation from "./ResetLoctaion";
import ParkingTicket from "./ParkingTicket";
import { useRef } from "react";

const MainContainer = () => {
  const { location, error } = useCurrentLocation();
  const mapRef = useRef(null);
  const locations = [
    { latitude: location?.latitude, longitude: location?.longitude },
    {
      latitude: location?.latitude + 0.001,
      longitude: location?.longitude + 0.004,
    },
    {
      latitude: location?.latitude - 0.002,
      longitude: location?.longitude - 0.003,
    },
  ];
  const handlerLocation = () => {
    if (mapRef.current && location) {
      mapRef.current.setCenter(
        new window.naver.maps.LatLng(location.latitude, location.longitude)
      );
    }
  };

  if (!location) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <ErrorText>Error: {error}</ErrorText>;
  }

  return (
    <MapContainer>
      <Map ref={mapRef} location={location} locations={locations} />
      <SearchContainer />
      <ParkingTicket />
      <ResetLocation handlerLocation={handlerLocation} />
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
