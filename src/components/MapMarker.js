import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/LoveMap.css";

const customIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapMarker = ({ location, selectedLocation, setSelectedLocation }) => {
  return (
    <Marker
      position={[location.lat, location.lng]}
      icon={customIcon}
      eventHandlers={{
        click: () => setSelectedLocation(location),
      }}
    >
      {selectedLocation?.id === location.id && (
        <Popup position={[location.lat, location.lng]} onClose={() => setSelectedLocation(null)}>
          <div className="popup-content">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </div>
        </Popup>
      )}
    </Marker>
  );
};

export default MapMarker;