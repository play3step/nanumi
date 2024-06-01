import React, { useEffect, forwardRef } from "react";

import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const Map = forwardRef(({ location }, ref) => {
  const navermaps = useNavermaps();

  useEffect(() => {
    if (ref?.current && location) {
      ref.current.setCenter(
        new navermaps.LatLng(location.latitude, location.longitude)
      );
    }
  }, [location, navermaps, ref]);

  return (
    <MapDiv style={{ width: "100%", height: "100%" }}>
      <NaverMap
        ref={ref}
        defaultCenter={
          new navermaps.LatLng(location.latitude, location.longitude)
        }
        defaultZoom={15}
      >
        <Marker
          position={new navermaps.LatLng(location.latitude, location.longitude)}
        />
      </NaverMap>
    </MapDiv>
  );
});

export default Map;
