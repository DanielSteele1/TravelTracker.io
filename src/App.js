import React, { useEffect, useState } from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapboxExample from './map';



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

// function Map() {
//   useEffect(() => {
//     const mapElement = document.getElementById('map');
//     if (!mapElement._leaflet_id) {
//       const map = L.map('map').setView([51.505, -0.09], 3);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(map);

//       const customIcon = L.icon({
//         iconUrl: 'map-marker-512.png',
//         iconSize: [40, 43],
//         iconAnchor: [25, 50],
//         popupAnchor: [0, -50]
//       });

//       // Add a test marker
//       L.marker([51.5072, 0.1276], { icon: customIcon }).addTo(map).openPopup();

//       fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson')
//         .then(response => response.json())
//         .then(data => {
//           L.geoJson(data).addTo(map);
//         })
//         .catch(error => console.error('Error fetching the GeoJSON data:', error));

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(map);


//       // london - test marker 
//       L.marker([51.5072, 0.1276], { icon: customIcon }).addTo(map)
//         .openPopup();

//     }
//   }, []);

//   return (
//     <div id="map" style={{ height: '500px' }}></div>
//   );
// }

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
      </div>
      <Footer />
    </div>
  );
}

export default App;