import React, {useState} from 'react'
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({position}) => {
  const [marker, setMarker] = useState(null)

  useState(() => {
    getPositionforMarker();
    setMarker(position)
  }, []);

  async function getPositionforMarker() {
    const d = await position;
    console.log(d);
  }

  return position === null ? null : (
    <Marker position={marker}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default LocationMarker
