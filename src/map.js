import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-0.1404545, 51.5220163], // starting position [lng, lat]
      zoom: 2 // starting zoom
    });

    new mapboxgl.Marker()
    .setLngLat([51.509865, 	-0.118092])
    .addTo(mapRef.current);

    new mapboxgl.Marker()
    .setLngLat([51.5072, 0.1276])
    .addTo(mapRef.current);

    new mapboxgl.Marker()
    .setLngLat([51.5072, 0.1276])
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

export default MapboxExample;