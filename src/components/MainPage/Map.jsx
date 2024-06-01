import React, { useEffect, forwardRef } from "react";

import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const Map = forwardRef(({ location, locations, setTicketVisible }, ref) => {
  const navermaps = useNavermaps();

  useEffect(() => {
    if (ref?.current && location) {
      ref.current.setCenter(
        new navermaps.LatLng(location.latitude, location.longitude)
      );
    }
  }, [location, navermaps, ref]);
  const handleMarkerClick = (loc) => {
    ref.current.setCenter(new navermaps.LatLng(loc.latitude, loc.longitude));
    setTicketVisible(true);
  };
  return (
    <MapDiv style={{ width: "100%", height: "100%" }}>
      <NaverMap
        ref={ref}
        defaultCenter={
          new navermaps.LatLng(location.latitude, location.longitude)
        }
        defaultZoom={15}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={new navermaps.LatLng(loc.latitude, loc.longitude)}
            onClick={() => handleMarkerClick(loc)}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
});

export default Map;
