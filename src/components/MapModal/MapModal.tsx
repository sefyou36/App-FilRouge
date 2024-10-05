/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/MapModal.tsx
import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapModal.scss'; // Assurez-vous d'importer votre fichier SCSS

type MapModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  initialLocation: { lat: number; lng: number }; // Utilisez initialLocation pour la position par défaut
};

const MapModal: React.FC<MapModalProps> = ({ isOpen, onRequestClose, initialLocation }) => {
  const [markerPosition, setMarkerPosition] = useState(initialLocation); // État pour la position du marqueur

  // Fonction pour gérer le double clic sur la carte
  const handleMapClick = useCallback((event: any) => {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2 style={{ textAlign: 'center' }}>Votre Localisation</h2>
      <LoadScript googleMapsApiKey="AIzaSyDbtqMF61TIHPGBXy62Hkocp97Siemx1zg"> {/* Remplacez par votre clé API */}
        <GoogleMap
          onClick={handleMapClick} // Ajouter un gestionnaire de clic
          mapContainerStyle={{ width: '100%', height: '450px' }} // Styles pour la carte
          center={markerPosition} // Centre la carte sur la position du marqueur
          zoom={13}
        >
          <Marker position={markerPosition} /> {/* Affiche le marqueur */}
        </GoogleMap>
      </LoadScript>
      <button 
        className="CloseButton" 
        onClick={onRequestClose}
      >
        Fermer
      </button>
    </Modal>
  );
};

export default MapModal;
