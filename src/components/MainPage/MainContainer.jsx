import styled from "styled-components";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import useCurrentLocation from "../../hooks/useCurrentLocation";

const MainContainer = () => {
  const navermaps = useNavermaps();
  const { location, error } = useCurrentLocation();

  if (!location) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <ErrorText>Error: {error}</ErrorText>;
  }

  return (
    <MapContainer>
      <MapDiv style={{ width: "100%", height: "100%" }}>
        <NaverMap
          defaultCenter={
            new navermaps.LatLng(location.latitude, location.longitude)
          }
          defaultZoom={15}
        ></NaverMap>
      </MapDiv>
    </MapContainer>
  );
};

export default MainContainer;

const MapContainer = styled.div`
  width: 390px;
  height: 844px;
  margin-left: auto;
  margin-right: auto;
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
