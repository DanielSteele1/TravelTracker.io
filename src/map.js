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
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-0.1404545, 51.5220163],
      zoom: 2,

    });

    // create GeolocateControl
    geolocateControlRef.current = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,

    });

    mapRef.current.addControl(geolocateControlRef.current);
    const controlElement = geolocateControlRef.current._container;
    controlElement.style.display = 'none';   // hide default button

    // // geolocation button 
    // mapRef.current.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true
    //     },
    //     trackUserLocation: true,
    //     showUserHeading: true
    //   })
    // );

    // unmount cleanup

  }, []);


  useEffect(() => {
    if (mapRef.current) {
      switch (layer) {
        case 'Normal':
          mapRef.current.setStyle('mapbox://styles/mapbox/streets-v11');
          console.log("Layer changed to Normal");
          break;
        case 'Satellite':
          mapRef.current.setStyle('mapbox://styles/mapbox/satellite-v9');
          console.log("Layer changed to Satellite");
          break;
        case 'Roads':
          mapRef.current.setStyle('mapbox://styles/mapbox/navigation-day-v1');
          console.log("Layer changed to Roads");
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