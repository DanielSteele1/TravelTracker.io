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

const PhotoBook = () => {

    return (

        <div className="Photo-menu">
            <div className="Photo-nav">
                Navigation
            </div>
            <div className="Photos">
                <Box className="photo-card">  </Box>
                <Box className="photo-card">  </Box>
                <Box className="photo-card">  </Box>
                <Box className="photo-card">  </Box>
                <Box className="photo-card">  </Box>
                <Box className="photo-card">  </Box>
            </div>


        </div>

    );
}
export default PhotoBook;