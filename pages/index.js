import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ21tbyIsImEiOiJjbDR4MTBnZDcyZHN4M2NzOHlxNHl6Nmc3In0.Mys1iMle8XQdVo_xKWkRoA";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col h-screen `;

const Map = tw.div`bg-red-500 flex-1`;

const ActionItems = tw.div`flex-1`;
