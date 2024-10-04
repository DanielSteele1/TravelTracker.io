import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

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


    for (const feature of geojson.features){

      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(mapRef.current);

    }


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


  });

  return (
    <div
      style={{ height: '865px' }}
      ref={mapContainerRef}
      className="map"
    />
  );
};

export default Mapbox;