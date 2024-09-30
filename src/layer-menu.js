import React, { useEffect, useRef } from 'react';

const LayerMenu = () => {

    return (

        <div className="map-layer-menu">
            <span className="map-layer-title"> Map Layers </span>
            <button className="map-layer-item"> Satellite </button>
            <button className="map-layer-item"> Roads </button>
            <button className="map-layer-item"> Public Transport </button>
            <button className="map-layer-item"> Geography </button>
        </div>

    );
}
export default LayerMenu;