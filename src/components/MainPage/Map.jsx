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
    setTicketVisible((prev) => ({
      ...prev,
      isVisible: true,
      content: loc.title,
    }));
  };
  const getMarkerIcon = (type) => {
    if (type === "공용") {
      return {
        url: `${process.env.PUBLIC_URL}/icon/marker1.png`,
        size: new navermaps.Size(65, 52),
        scaledSize: new navermaps.Size(65, 52),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(16, 32),
      };
    } else if (type === "나눔") {
      return {
        url: `${process.env.PUBLIC_URL}/icon/marker2.png`,
        size: new navermaps.Size(55, 65),
        scaledSize: new navermaps.Size(55, 65),
        origin: new navermaps.Point(0, 0),
        anchor: new navermaps.Point(12, 24),
      };
    } else {
      return null;
    }
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
            icon={getMarkerIcon(loc.type)}
            onClick={() => handleMarkerClick(loc)}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
});

export default Map;
