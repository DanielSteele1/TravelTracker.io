import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GlobalStyles from '@mui/material/GlobalStyles';

const Mapbox = ({ canPlaceMarker, toggleMarker }) => {
  console.log('Props received in Mapbox:', { canPlaceMarker, toggleMarker });

  const mapContainerRef = useRef(null);
  const mapRef = useRef();
  const canPlaceMarkerRef = useRef(canPlaceMarker);

  useEffect(() => {

    canPlaceMarkerRef.current = canPlaceMarker;

  }, [canPlaceMarker]);

  useEffect(() => {

    console.log("canPlaceMarker in Mapbox:", canPlaceMarker);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-0.1404545, 51.5220163],
      zoom: 2
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        }
      ]
    };

    for (const feature of geojson.features) {

      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(mapRef.current);

    }

    // when a user clicks on the map, place a marker

    const handleMapClick = (e) => {
      console.log('Map Clicked, canPlaceMarker:', canPlaceMarkerRef.current);
      if (canPlaceMarkerRef.current) {
        const { lng, lat } = e.lngLat;

        var customMarker = document.createElement('div');
        customMarker.className = 'marker';
        customMarker.style.backgroundImage = 'url(/map-marker-512.png)';
    
        // Create and place a new marker
        new mapboxgl.Marker(customMarker)
          .setLngLat([lng, lat])
          .addTo(mapRef.current); // Add the marker to the map

        console.log("Marker placed at:", lng, lat);
      } else {

        console.log("Marker placement is disabled.");
      }
    };
    mapRef.current.on('click', handleMapClick);

    return () => {
      mapRef.current.off('click', handleMapClick);
      mapRef.current.remove();

    };
  }, []);

  return (
    <div
      style={{ height: '865px' }}
      ref={mapContainerRef}
      className="map"
    />
  );
};

export default Mapbox;