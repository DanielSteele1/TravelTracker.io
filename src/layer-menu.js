import React, { useEffect, useRef } from 'react';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';

import LayersIcon from '@mui/icons-material/Layers';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommuteIcon from '@mui/icons-material/Commute';
import TerrainIcon from '@mui/icons-material/Terrain';

const LayerMenu = () => {

    return (

        <div className="map-layer-menu">
            <span className="map-layer-title"> <LayersIcon></LayersIcon> </span>
            <button className="map-layer-item"><SatelliteAltIcon></SatelliteAltIcon> </button>
            <button className="map-layer-item"> <LocalShippingIcon></LocalShippingIcon> </button>
            <button className="map-layer-item"> <CommuteIcon></CommuteIcon> </button>
            <button className="map-layer-item"> <TerrainIcon></TerrainIcon>  </button>
        </div>

    );
}
export default LayerMenu;