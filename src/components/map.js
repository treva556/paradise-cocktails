
// Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map('map').setView([-1.265083643204866, 36.802259097479265], 13); // Coordinates for London
    // -1.2167414015743043, 36.88763617342789
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker([-1.265083643204866, 36.802259097479265]).addTo(map)
      .bindPopup('A location marker.')
      .openPopup();

    // Cleanup the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default Map;