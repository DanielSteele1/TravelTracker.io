import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-0.1404545, 51.5220163], // starting position [lng, lat]
      zoom: 2 // starting zoom
    });

    //example marker - london

    new mapboxgl.Marker()
    .setLngLat([-0.127758,51.507351])
    .addTo(mapRef.current);

    new mapboxgl.Marker()
    .setLngLat([-74.005974,40.712776])
    .addTo(mapRef.current);

    new mapboxgl.Marker()
    .setLngLat([37.617298, 55.755825])
    .addTo(mapRef.current);
  });

  return (
    <div
      style={{ height: '865px' }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default Mapbox;