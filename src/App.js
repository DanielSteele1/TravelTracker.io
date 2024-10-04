import React, { useEffect, useState } from 'react';
import './App.css';
//import L from 'leaflet';
//import 'leaflet/dist/leaflet.css';
import Mapbox from './map';
import LayerMenu from './layer-menu';

import { createContext } from 'react';

export const ThemeContext = createContext(null);

function Navigation({ theme, toggleTheme}) {

  return (
    <>
      <div className="navigation">
        <div className="nav-left">
          <div className="nav-item"> TravelTracker.io </div>
        </div>
        <div className="nav-right">

          <div className="nav-item">
            <label> {theme === "light" ? "Light" : "Dark"} </label>
              <button id="theme-button" onClick={toggleTheme} checked={theme === "dark"}>
              <img src="light-mode.png" /> </button>
          </div>

          <div className="nav-item"> Map </div>

          <div className="nav-item"> Accounts </div>
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

  return (
    <>

        <button id="hide-button" title="Hide Menu" onclick="hideButton()"> Hide Menu </button>

      <div className="main-menu">

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

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />

        <div className="content">
          <Mapbox />
          <MainMenu />
          <LayerMenu />

        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;