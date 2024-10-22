import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import darkScrollbar from '@mui/material/darkScrollbar';


import LayersIcon from '@mui/icons-material/Layers';

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommuteIcon from '@mui/icons-material/Commute';
import TerrainIcon from '@mui/icons-material/Terrain';
import PhotoIcon from '@mui/icons-material/Photo';


function PhotoBook() {
    useEffect(() => {

        function togglePhotos() {

            const PhotoMenu = document.getElementsByClassName("Photo-menu");

            for (let i = 0; i < PhotoMenu.length; i++) {

                if (PhotoMenu[i].classList.contains("hidden")) {
                    PhotoMenu[i].classList.remove("hidden");

                } else {
                    PhotoMenu[i].classList.add("hidden");

                }
            }
        };


        document.getElementById("Photo-Exit").addEventListener("click", togglePhotos);

        return () => {

            document.getElementById("Photo-Exit").removeEventListener("click", togglePhotos);
        }

    }, []);

    return (

        <div className="Photo-menu">
            <div className="nav-container">
                <div className="Photo-nav">
                    Navigation
                </div>
                <div id="Photo-Exit"> <button>X</button></div>
            </div>
            <div className="Photos">




                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
            </div>

            <darkScrollbar> </darkScrollbar>
        </div>

    );
}
export default PhotoBook;