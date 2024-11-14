import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import lightScrollbar from '@mui/material/darkScrollbar';

import LayersIcon from '@mui/icons-material/Layers';

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CommuteIcon from '@mui/icons-material/Commute';
import TerrainIcon from '@mui/icons-material/Terrain';
import PhotoIcon from '@mui/icons-material/Photo';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


function PhotoBook() {
    useEffect(() => {

        function showPhotos() {
            const PhotoMenu = document.getElementsByClassName("Photo-menu");

            for (let i = 0; i < PhotoMenu.length; i++) {

                if (PhotoMenu[i].classList.contains("hidden")) {
                    PhotoMenu[i].classList.remove("hidden");  //show

                }
            };

        }

        function hidePhotos() {
            const PhotoMenu = document.getElementsByClassName("Photo-menu");


            for (let i = 0; i < PhotoMenu.length; i++) {

                if (!PhotoMenu[i].classList.contains("hidden")) {
                    PhotoMenu[i].classList.add("hidden");   //hide

                }
            }
        }

        document.getElementById("showPhotos").addEventListener("click", showPhotos);
        document.getElementById("Photo-Exit").addEventListener("click", hidePhotos);

        return () => {

            document.getElementById("showPhotos").removeEventListener("click", hidePhotos);
            document.getElementById("Photo-Exit").removeEventListener("click", showPhotos);
        }

    }, []);

    return (

        <div className="Photo-menu hidden">
            <div className="nav-container">
                <div className="Photo-nav">
                    Navigation
                </div>
                <div id="Photo-Exit"> <CloseIcon></CloseIcon></div>
            </div>
            <div className="Photos">

                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
                <Box className="photo-card">  <PhotoIcon> </PhotoIcon> </Box>
            </div>

            <lightScrollbar> </lightScrollbar> 
        </div>

    );
}
export default PhotoBook;