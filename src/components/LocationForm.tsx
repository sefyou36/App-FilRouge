// src/components/LocationForm.tsx
import React, { useState } from 'react';
import MapModal from './MapModal/MapModal';

type LocationFormProps = {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
};

const LocationForm: React.FC<LocationFormProps> = ({ onLocationSelect }) => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Remplace 'YOUR_API_KEY' par ta clé API Google Maps
    const apiKey = 'AIzaSyDbtqMF61TIHPGBXy62Hkocp97Siemx1zg'; // Remplace par ta clé API Google Maps
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);

    if (response.ok) {
      const data = await response.json();
      const geometry = data.results[0]?.geometry;

      if (geometry) {
        const newLocation = { lat: geometry.location.lat, lng: geometry.location.lng }; // Accès correct à la latitude et longitude
        setLocation(newLocation);
        onLocationSelect(newLocation);
        setIsModalOpen(true); // Ouvre le modal lorsque la localisation est obtenue
      } else {
        alert('Localisation non trouvée.');
      }
    } else {
      alert('Erreur lors de la recherche de localisation.');
    }

    setLoading(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Entrez votre adresse"
          className="border p-2 rounded-l flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
          {loading ? 'Chargement...' : 'Obtenir la localisation'}
        </button>
      </form>

      {location && (
        <MapModal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal} 
          initialLocation={location} // Passer initialLocation au lieu de location
        />
      )}
    </>
  );
};

export default LocationForm;
