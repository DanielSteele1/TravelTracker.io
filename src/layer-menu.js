import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';

import LayersIcon from '@mui/icons-material/Layers';

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommuteIcon from '@mui/icons-material/Commute';
import TerrainIcon from '@mui/icons-material/Terrain';

const LayerMenu = () => {

    return (

        <div className="map-layer-menu">
            <span className="map-layer-title"> <LayersIcon></LayersIcon> <h3>Layers</h3> </span>
            <button className="map-layer-item"><SatelliteAltIcon sx={{ padding: '5px' }}></SatelliteAltIcon> <h4>Satellite </h4> </button>
            <button className="map-layer-item"> <LocalShippingIcon  sx={{ padding: '5px' }}></LocalShippingIcon><h4> Roads </h4> </button>
            <button className="map-layer-item"> <CommuteIcon  sx={{ padding: '5px' }}></CommuteIcon> <h4> Transport </h4></button>
            <button className="map-layer-item"> <TerrainIcon  sx={{ padding: '5px' }}></TerrainIcon> <h4> Terrain </h4> </button>
        </div>

    );
}
export default LayerMenu;