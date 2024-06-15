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
    ref.current.setCenter(
      new navermaps.LatLng(loc.location.latitude, loc.location.longitude)
    );
    setTicketVisible((prev) => ({
      ...prev,
      isVisible: true,
      parkingLotId: loc.parking_lot_id,
      type: "주차장",
    }));
  };
  const getMarkerIcon = (loc) => {
    const remainingDigits = loc.total_digits - loc.use_digit;
    const occupancyRate = (remainingDigits / loc.total_digits) * 100;

    let status;
    if (occupancyRate <= 20) {
      status = "혼잡";
    } else if (occupancyRate <= 50) {
      status = "보통";
    } else {
      status = "여유";
    }

    let iconUrl;
    let width, height, color;

    if (loc.type === "공영") {
      if (status === "혼잡") {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker3.png`;
      } else if (status === "보통") {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker2.png`;
      } else {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker1.png`;
      }
      width = 65;
      height = 52;
      color = "#5899F7";
    } else if (loc.type === "나눔") {
      if (status === "혼잡") {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker6.png`;
      } else if (status === "보통") {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker5.png`;
      } else {
        iconUrl = `${process.env.PUBLIC_URL}/marker/marker4.png`;
      }
      width = 55;
      height = 65;
      color = "#FFFFFF";
    }

    return {
      content: `
        <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
          <img src="${iconUrl}" alt="marker" style="width: ${width}px; height: ${height}px;" />
          <div style="
            position: absolute;
            bottom: 30%;
            left: 50%;
            transform: translateX(-50%);
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            color: ${color};
          ">
            ${loc.price_per_10min}
          </div>
        </div>
      `,
      size: new navermaps.Size(width, height),
      anchor: new navermaps.Point(width / 2, height),
    };
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
            position={
              new navermaps.LatLng(
                loc.location.latitude,
                loc.location.longitude
              )
            }
            icon={getMarkerIcon(loc)}
            onClick={() => handleMarkerClick(loc)}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
});

export default Map;
