// src/components/Map.tsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import React from 'react';

type MapProps = {
  location: { lat: number; lng: number };
};

const Map: React.FC<MapProps> = ({ location }) => {
  const position: LatLngExpression = [location.lat, location.lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Votre position actuelle</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
