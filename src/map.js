import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Satellite } from '@mui/icons-material';
import { map } from 'leaflet';

const Mapbox = ({ triggerGeolocation, canPlaceMarker, toggleMarker, layer }) => {
  console.log('Props received in Mapbox:', { canPlaceMarker, toggleMarker });

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const canPlaceMarkerRef = useRef(canPlaceMarker);

  const geolocateControlRef = useRef(null);


  useEffect(() => {

    canPlaceMarkerRef.current = canPlaceMarker;

  }, [canPlaceMarker]);

  useEffect(() => {

    console.log("canPlaceMarker in Mapbox:", canPlaceMarker);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZHN0ZWVsZTIyIiwiYSI6ImNtMWt2cWs4NTAzYXYybXF2dDM1cmNtazIifQ.aXhlnjtOVio05U9yMU101g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [-0.1404545, 51.5220163],
      zoom: 2,
      antialias: true


    });

    // create GeolocateControl
    geolocateControlRef.current = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,

    });

    // mapRef.current.on('style.load', () => {
    //   mapRef.setConfigProperty('basemap', 'show3dObjects', true);
    // });

    mapRef.current.addControl(geolocateControlRef.current);
    const controlElement = geolocateControlRef.current._container;
    controlElement.style.display = 'none';   // hide default button

  }, []);



  useEffect(() => {
    if (mapRef.current) {
      switch (layer) {
        case 'Standard':
          mapRef.current.setStyle('mapbox://styles/mapbox/standard');
          console.log("Layer changed to Normal");
          break;
        case 'Satellite':
          mapRef.current.setStyle('mapbox://styles/mapbox/satellite-v9');
          console.log("Layer changed to Satellite");
          break;
        case 'Landmarks':
          mapRef.current.setStyle('mapbox://styles/mapbox/dark-v11');
          console.log("Layer changed to Landmarks");

          // Wait for the style to load before adding 3D buildings
          mapRef.current.once('style.load', () => {
            // Set pitch and bearing for 3D perspective

            // Add 3D buildings layer
            mapRef.current.addLayer({
              id: '3d-buildings',
              source: 'composite',
              'source-layer': 'building',
              filter: ['==', 'extrude', 'true'], // Only extrude buildings
              type: 'fill-extrusion',
              minzoom: 15, // Show 3D buildings at zoom level 15 and above
              paint: {
                'fill-extrusion-color': '#aaa', // Color of buildings
                'fill-extrusion-height': ['get', 'height'], // Use the building's height property
                'fill-extrusion-base': ['get', 'min_height'], // Use the base height property
                'fill-extrusion-opacity': 0.6 // Transparency
              }
            });
            console.log('Available layers:', mapRef.current.getStyle().layers);
            mapRef.current.setLayoutProperty('poi-label', 'visibility', 'visible');
            mapRef.current.setLayoutProperty('airport-label', 'visibility', 'visible');

          });

          break;
        case 'Terrain':
          mapRef.current.setStyle('mapbox://styles/mapbox/outdoors-v11');
          console.log("Layer changed to Terrain");
          break;
        case 'Traffic':
          mapRef.current.setStyle('mapbox://styles/mapbox/traffic-day-v2');
          console.log("Layer changed to Traffic");
          break;
        case 'Streets':
          mapRef.current.setStyle('mapbox://styles/mapbox/streets-v12');
          console.log("Layer changed to Streets");
          break;
        default:
          console.warn('Unknown layer:', layer);
          break;
      }
    }
  }, [layer]);


 // Cities and POV hardcoded onto map 

 useEffect(() => {






  return () => {





  };


 });


 // Text Search API Requests

 useEffect(() => {

  



  return () => {





  };


 });


  useEffect(() => {

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
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };

  }, []);

  useEffect(() => {

    if (triggerGeolocation && geolocateControlRef.current) {
      geolocateControlRef.current.trigger();    // activate geolocation
    }

  }, [triggerGeolocation]);


  return (
    <div
      style={{ height: '865px' }}
      ref={mapContainerRef}
      className="map"
    />
  );
};

export default Mapbox;