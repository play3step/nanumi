import styled from "styled-components";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const MainContainer = () => {
  const navermaps = useNavermaps();

  return (
    <MapContainer>
      <MapDiv style={{ width: "100%", height: "100%" }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={15}
        >
          <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} />
        </NaverMap>
      </MapDiv>
    </MapContainer>
  );
};

export default MainContainer;

const MapContainer = styled.div`
  width: 390px;
  height: 844px;
`;
