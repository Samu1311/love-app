import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/LoveMap.css";
import MapMarker from "../components/MapMarker";

const locations = [
  { id: 1, name: "Coliseo de Roma", lat: 41.8905, lng: 12.4922, description: "Lugar donde nos conocimos" },
  { id: 2, name: "Stevedorevej 17, Horsens", lat: 55.8460, lng: 9.8369, description: "La primera casa en la que vivimos juntos" },
  { id: 3, name: "Nørregade 22B, Horsens", lat: 55.8629, lng: 9.8498, description: "La segunda casa en la que vivimos juntos" },
  { id: 4, name: "Sankt Helene Vej 9, Horsens", lat: 55.8598, lng: 9.8460, description: "Nuestra casita en Horsens" },
  { id: 5, name: "Rolf Krakes Alle 5, Copenhague", lat: 55.7496, lng: 12.4853, description: "Nuestra casita en Copenhague" },
  { id: 6, name: "Sporvejen", lat: 55.6798, lng: 12.5759, description: "Nuestro Burger Spot" },
  { id: 7, name: "JOJO", lat: 55.6710, lng: 12.5440, description: "Donde nos dijimos TE AMO" },
  { id: 8, name: "Fabro", lat: 55.6867, lng: 12.5880, description: "Nuestro pasta spot – primer date oficial" },
  { id: 9, name: "Bygholm Park", lat: 55.8645, lng: 9.8299, description: "Donde escuchamos DTMF de Bad Bunny" },
  { id: 10, name: "Horsens Marina", lat: 55.8579, lng: 9.8757, description: "Nuestro verdadero primer date caminando a la playita" },
  { id: 11, name: "DFDS | Oslo", lat: 59.9027, lng: 10.7438, description: "El viaje del amor" },
  { id: 12, name: "Cape Town", lat: -33.9186, lng: 18.4118, description: "Nuestro futuro hogar" },
  { id: 13, name: "Perreo Social Club", lat: 55.6699, lng: 12.5599, description: "Nuestra primera fiesta solos" },
  { id: 14, name: "Valdemars Alle 57", lat: 55.7568, lng: 12.4912, description: "La casa del terror" },
  { id: 15, name: "Østerport Station", lat: 55.6927, lng: 12.5892, description: "La estación del amor" },
  { id: 16, name: "Isla Tiberina", lat: 41.8904, lng: 12.4777, description: "La isla donde pensaste que nunca seríamos amigos" },
  { id: 17, name: "Boller Slot", lat: 55.8382, lng: 9.8992, description: "Nuestro picnic con bucle temporal" },
  { id: 18, name: "Folkehuset Absalon", lat: 55.6656, lng: 12.5522, description: "Karaoke y Wine&Art" },
  { id: 19, name: "Best Western Hotel", lat: 55.6453, lng: 12.6369, description: "El hotel de nuestro año nuevo" },
  { id: 20, name: "Beso Año Nuevo", lat: 55.6753, lng: 12.5673, description: "La mejor forma de empezar el año que he tenido" },
];

function LoveMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="love-map-container">
      <h1>Nuestro Mapa del Amor ❤️</h1>
      <p>Explora nuestra relación y sus "landmarks"</p>
      <MapContainer center={[55.6761, 12.5683]} zoom={4} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {locations.map((location) => (
          <MapMarker key={location.id} location={location} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        ))}
      </MapContainer>
      <button className="home-button" onClick={goToHomePage}>
        <i className="fas fa-home"></i> Home
      </button>
    </div>
  );
}

export default LoveMap;