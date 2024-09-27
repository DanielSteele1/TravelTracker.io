import React, { useEffect, useState } from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapboxExample from './map';
import LayerMenu from './layer-menu';


function Navigation() {

  return (
    <div className="navigation">
      <div className="nav-left">
        <div className="nav-item"> TravelTracker.io </div>
      </div>
      <div className="nav-right">
        <div className="nav-item">
          <img src="light-mode.png" alt="Light Mode" />
        </div>
        <div className="nav-item"> Map </div>
        <div className="nav-item"> Accounts </div>
      </div>
    </div>
  );
}


function MainMenu() {
  useEffect(() => {
    function hideButton() {
      const hideButton = document.getElementById("hide-button");
      const mainMenu = document.getElementsByClassName("main-menu");

      for (let i = 0; i < mainMenu.length; i++) {
        if (mainMenu[i].classList.contains("hidden")) {
          mainMenu[i].classList.remove("hidden");
          hideButton.textContent = "Hide Menu";

        } else {
          mainMenu[i].classList.add("hidden");
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
      <div className="button-draw">
        <button id="hide-button" title="Hide Menu" onclick="hideButton()"> Hide Menu </button>
      </div>
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
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <MapboxExample />
        <MainMenu />
        <LayerMenu />

      </div>
      <Footer />
    </div>
  );
}

export default App;