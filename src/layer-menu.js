import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';

import LayersIcon from '@mui/icons-material/Layers';

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import CommuteIcon from '@mui/icons-material/Commute';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';


const LayerMenu = ({onLayerChange}) => {

    return (

        <div className="map-layer-menu">
            <span className="map-layer-title"> <LayersIcon></LayersIcon> <h3>Layers</h3> </span>
            <button className="map-layer-item"  onClick={() => onLayerChange('Standard')} ><ExploreOutlinedIcon sx={{ padding: '5px' }}></ExploreOutlinedIcon> <h4>Standard</h4> </button>
            <button className="map-layer-item"  onClick={() => onLayerChange('Satellite')} ><SatelliteAltIcon sx={{ padding: '5px' }}></SatelliteAltIcon> <h4>Satellite </h4> </button>
            <button className="map-layer-item"  onClick={() => onLayerChange('Landmarks')}> <LocationCityIcon  sx={{ padding: '5px' }}></LocationCityIcon> <h4>Landmarks </h4></button>
            <button className="map-layer-item"  onClick={() => onLayerChange('Streets')}> <TerrainIcon  sx={{ padding: '5px' }}></TerrainIcon> <h4> Streets </h4> </button>
            <button className="map-layer-item"  onClick={() => onLayerChange('Traffic')}> <CommuteIcon  sx={{ padding: '5px' }}></CommuteIcon><h4> Traffic </h4> </button>
            <button className="map-layer-item"  onClick={() => onLayerChange('Terrain')}> <TerrainIcon  sx={{ padding: '5px' }}></TerrainIcon> <h4> Terrain </h4> </button>

        </div>

    );
}
export default LayerMenu;