import React, { useEffect, useState } from 'react';
import './App.css';

import Mapbox from './map';
import LayerMenu from './layer-menu';
import PhotoBook from './photobook';
import LoginOrSignup from './login.js';

import { createContext } from 'react';
import Switch from '@mui/material/Switch';
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
//import { red } from '@mui/material/colors';

import LoginIcon from '@mui/icons-material/Login';
import MapIcon from '@mui/icons-material/Map';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import WrongLocationOutlinedIcon from '@mui/icons-material/WrongLocationOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
//import GlobalStyles from '@mui/material/GlobalStyles';

export const ThemeContext = createContext(null);

function Navigation({ theme, toggleTheme, onLocateMe }) {

  return (
    <>
      <div className="navigation">
        <div className="nav-left">
          <div className="nav-item"> <h2 class="title">TravelTracker.io</h2> </div>
        </div>
        <div className="nav-right">

          <div className="nav-item">
            <Box sx={{ borderColor: 'rgb(255, 90, 90)' }}>
              <Paper component="form" className="search-paper" sx={{

                height: 'fit-content', width: 'fit-content',
                display: 'flex', alignItems: 'center',
                color: 'rgb(255, 90, 90)',
                backgroundColor: 'rgba(40, 44, 52)'
              }} >

                <InputBase disabled={false} sx={{
                  fontFamily: 'Nunito, sans-serif',
                  textalign: 'center', margin: '0 auto', p: '5px',
                  color: 'rgb(255, 90, 90)', width: 'fit-content'
                }}
                  id="search-bar" placeholder="Search a location" variant="outlined" size="small">
                </InputBase>
              </Paper>
            </Box>
          </div>

          <div className="search-button">
            <Button className="button" sx={{ display: 'flex', height: 'fit-content', width: 'fit-content' }}>
              <SearchIcon sx={{ justifyContent: 'center', color: 'rgb(255, 90, 90)' }}> </SearchIcon>
            </Button>
          </div>

          <div className="nav-item">
            <Box sx={{ borderColor: 'rgb(255, 90, 90)' }}>
              <Button className="locate-Position" onClick={onLocateMe}>
                <LocationOnIcon sx={{
                  display: 'flex',
                  color: 'rgb(255, 90, 90)',
                  justifyContent: 'center',
                  height: 'fit-content'
                }}> </LocationOnIcon>
              </Button>
            </Box>

          </div>

          <div className="nav-item">
            <label> {theme === "light" ? "Light" : "Dark"} </label>
            <Switch sx={{

              '& .MuiSwitch-switchBase.Mui-checked': {
                color: 'rgb(255, 90, 90)',
                '& + .MuiSwitch-track': {
                  backgroundColor: 'rgb(255, 90, 90)',
                },
              },
              '& .MuiSwitch-switchBase': {
                color: 'grey',
              },
              '& .MuiSwitch-track': {
                backgroundColor: 'lightgrey',
              },

            }}
              defaultChecked id="theme-button"
              onClick={toggleTheme} checked={theme === "dark"}>
            </Switch>
          </div>

          <div className="nav-item"> <Box className="Box"> <MapIcon></MapIcon> </Box> Map </div>

          <div className="nav-item"> <Box className="Box"> <PartyModeIcon></PartyModeIcon> </Box> <div id="showPhotos">Photo Book</div></div>

          <div className="nav-item"> <Box className="Box"> <LoginIcon></LoginIcon> </Box> <div id="showPortal">Login</div> </div>

        </div>
      </div>
    </>
  )
};

function MainMenu({ canPlaceMarker, toggleMarker }) {
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

  return (
    <>

      <button id="hide-button" title="Hide Menu" onclick="hideButton()"> Hide Menu </button>

      <div className="main-menu">
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker" onClick={toggleMarker}>
            <AddLocationAltOutlinedIcon sx={{

              display: 'flex',
              height: '50px',
              width: '50px',
              color: 'rgb(255, 90, 90)',
              justifyContent: 'center',
              height: 'fit-content'

            }}>
              {canPlaceMarker ? 'off' : 'on'}
            </AddLocationAltOutlinedIcon>
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <WrongLocationOutlinedIcon sx={{

              display: 'flex',
              height: '50px',
              width: '50px',
              color: 'rgb(255, 90, 90)',
              justifyContent: 'center',
              height: 'fit-content'

            }}>

            </WrongLocationOutlinedIcon>
          </button>
        </div>
        <div className="menu-item">
          <button id="add-marker" title="Add a Marker" alt="add-marker">
            <EditLocationOutlinedIcon sx={{

              display: 'flex',
              height: '50px',
              width: '50px',
              color: 'rgb(255, 90, 90)',
              justifyContent: 'center',
              height: 'fit-content'

            }} />
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
    console.log("canPlaceMarker is now:", !canPlaceMarker);
  };

  const [triggerGeolocation, setTriggerGeolocation] = useState(false);

  const handleLocateMe = () => {

    setTriggerGeolocation(prev => !prev);

  };

  const [selectedLayer, setSelectedLayer] = useState('Normal');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navigation theme={theme} toggleTheme={toggleTheme} onLocateMe={handleLocateMe} />
        <div className="content">
          <Mapbox canPlaceMarker={canPlaceMarker} toggleMarker={toggleMarker} triggerGeolocation={triggerGeolocation} layer={selectedLayer} />
          <MainMenu canPlaceMarker={canPlaceMarker} toggleMarker={toggleMarker} />
          <LayerMenu onLayerChange={setSelectedLayer}/>    // pass the callback to layermenu
          <PhotoBook />
          <LoginOrSignup />

        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;