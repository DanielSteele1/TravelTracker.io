import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = ({canPlaceMarker, toggleMarker}) => {
  console.log('Props received in Mapbox:', { canPlaceMarker, toggleMarker });
  const mapContainerRef = useRef();
  const mapRef = useRef();


  //state to place marker, if true, user can place one

  useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-0.1404545, 51.5220163], // starting position [lng, lat]
      zoom: 2 // starting zoom
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
    mapRef.current.on('click', (e) => {

      console.log('Map Clicked', canPlaceMarker);

      if (canPlaceMarker) {
        const { lng, lat } = e.lngLat;

        new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(mapRef.current);

          console.log("toggleMarker is:", toggleMarker);
        toggleMarker();

      }

    });


  //example marker - london

  new mapboxgl.Marker()
    .setLngLat([-0.127758, 51.507351])
    .addTo(mapRef.current);

  new mapboxgl.Marker()
    .setLngLat([-74.005974, 40.712776])
    .addTo(mapRef.current);

    return () => { 
      mapRef.current.remove(); 
      mapRef.current.off('click');
    };
  }, [canPlaceMarker, toggleMarker]);


return (
  <div
    style={{ height: '865px' }}
    ref={mapContainerRef}
    className="map"
  />
);
};

export default Mapbox;