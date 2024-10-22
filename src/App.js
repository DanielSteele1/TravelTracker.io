import React, { useEffect, useState } from 'react';
import './App.css';
//import L from 'leaflet';
//import 'leaflet/dist/leaflet.css';
import Mapbox from './map';
import LayerMenu from './layer-menu';
import PhotoBook from './photobook';

import { createContext } from 'react';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';

import LoginIcon from '@mui/icons-material/Login';
import MapIcon from '@mui/icons-material/Map';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import SearchIcon from '@mui/icons-material/Search';

import GlobalStyles from '@mui/material/GlobalStyles';

export const ThemeContext = createContext(null);

function Navigation({ theme, toggleTheme }) {

  return (
    <>

      <div className="navigation">
        <div className="nav-left">
          <div className="nav-item"> <h2 class="title">TravelTracker.io</h2> </div>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <Box sx={{ border: '1px', borderColor: 'rgb(255, 90, 90)' }}>
              <Paper component="form" className="search-paper"sx={{
                p: '2px 5px',
                height: '35px', width: 'fit-content',
                display: 'flex', alignItems: 'center',
                color: 'rgb(255, 90, 90)',
                backgroundColor: 'rgba(40, 44, 52)'
              }} >

                <InputBase sx={{ fontFamily: 'Open Sans, sans-serif', display: 'flex', margin:'0 auto', p: '10px', color: 'rgb(255, 90, 90)', }}
                  id="search-bar" placeholder="Search a location" variant="outlined" size="small"> </InputBase>

                <Button className="Box" sx={{ display: 'flex', border: 'rgb(255, 90, 90)' }}>
                  <SearchIcon id="search-button" sx={{ display: 'flex', justifyContent: 'flex-end', p: '5px', color: 'rgb(255, 90, 90)' }}> </SearchIcon>
                </Button>
              </Paper>
            </Box>
          </div>
          <div className="nav-item">
            <label> {theme === "light" ? "Light" : "Dark"} </label>
            <Switch sx={{

              '& .MuiSwitch-switchBase.Mui-checked': {
                color: 'rgb(255, 90, 90)', // Color of the thumb when checked
                '& + .MuiSwitch-track': {
                  backgroundColor: 'rgb(255, 90, 90)', // Color of the track when checked
                },
              },
              '& .MuiSwitch-switchBase': {
                color: 'grey', // Color of the thumb when unchecked
              },
              '& .MuiSwitch-track': {
                backgroundColor: 'lightgrey', // Color of the track when unchecked
              },

            }}
              defaultChecked id="theme-button"
              onClick={toggleTheme} checked={theme === "dark"}>
            </Switch>
          </div>

          <div className="nav-item"> <Box className="Box"> <MapIcon></MapIcon> </Box> Map </div>

          <div className="nav-item"> <Box className="Box"> <PartyModeIcon></PartyModeIcon> </Box> <a href="photobook.js">Photo Book</a></div>

          <div className="nav-item"> <Box className="Box"> <LoginIcon></LoginIcon> </Box> Log in</div>

        </div>
      </div>
    </>
  )
};

function MainMenu() {
  useEffect(() => {
    function hideButton() {
      const hideButton = document.getElementById("hide-button");
      const mainMenu = document.getElementsByClassName("main-menu");
      const mapLayers = document.getElementsByClassName("map-layer-menu");

      for (let i = 0; i < mainMenu.length; i++) {
        if (mainMenu[i].classList.contains("hidden")) {
          mainMenu[i].classList.remove("hidden");
          mapLayers[i].classList.remove("hidden");
          hideButton.textContent = "Hide Menu";

        } else {
          mainMenu[i].classList.add("hidden");
          mapLayers[i].classList.add("hidden");
          hideButton.textContent = "Show Menu";

        }
      }
    }



    document.getElementById("hide-button").addEventListener("click", hideButton);

    return () => {
      document.getElementById("hide-button").removeEventListener("click", hideButton);
    };
  }, []);

  const [canPlaceMarker, setCanPlaceMarker] = useState(false);

  const toggleMarker = () => {
    setCanPlaceMarker((prev) => !prev);
  };

  return (
    <>

      <button id="hide-button" title="Hide Menu" onclick="hideButton()"> Hide Menu </button>

      <div className="main-menu">
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker" onClick={toggleMarker}>
            {canPlaceMarker ? 'off' : 'on'}
            <img src="add-marker.png" />
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <img src="add-marker.png" />
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <img src="add-marker.png" />
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <img src="add-marker.png" />
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <img src="add-marker.png" />
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <img src="add-marker.png" />
          </button>
        </div>
      </div>

    </>
  );
}

function Footer() {
  return (
    <div className="footer"> Website Made by <a href="https://danielsteele.dev"> <span>  Daniel Steele  </span> </a>  </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {

    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  };

  const [canPlaceMarker, setCanPlaceMarker] = useState(false);

  const toggleMarker = () => {
    setCanPlaceMarker((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <div className="content">
          <Mapbox canPlaceMarker={canPlaceMarker} toggleMarker={toggleMarker} />
          <MainMenu />
          <LayerMenu />
          <PhotoBook />

        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;