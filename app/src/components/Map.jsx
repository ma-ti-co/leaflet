import React, {useState, useEffect, useRef} from 'react';
import { MapContainer, TileLayer, useMap, useMapEvent, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; // <- Leaflet styles
import LocationMarker from './LocationMarker';
import { DateTime } from "luxon";



const StarterMap = (mapState) => {
  

  const MapUpdater = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(mapState.mapState)
    }, [mapState])
    return null;
  }

  




  return (
      <>
      {JSON.stringify(mapState.isLoading)}
      {!mapState.isLoading ?

      <MapContainer
        center={[0,0]} // Initial map center coordinates
        zoom="16" // Initial zoom level
        style={{ height: '400px', width: '100%' }} // Adjust the map size as needed
      >    
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <MapUpdater />
        <Marker position={mapState.mapState}>
        </Marker>
      </MapContainer>
      :''}
      </>

  );
};

export default StarterMap;
