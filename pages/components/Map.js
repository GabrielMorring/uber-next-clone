import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ21tbyIsImEiOiJjbDR4MTBnZDcyZHN4M2NzOHlxNHl6Nmc3In0.Mys1iMle8XQdVo_xKWkRoA";

function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`flex flex-col flex-1 `;

export default Map;
