import { useEffect, useRef, useState } from 'react'
import StarterMap from './components/Map'
import { Container } from '@chakra-ui/react'
import Overlay from './components/Overlay';


function App() {

  const [mapState, setMapState] = useState([0, 0]);
  const [count, setCount] = useState(0);
  const [country, setCountry] = useState();
  const [ip, setIp] = useState(null);
  const [countryFlag, setCountryFlag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      getLocation();
    }
  }, []);


  const getLocation = async () => {
    if(count === 0 ){
      setCount(1);
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_KEY}`);
      const data = await response.json();
      setIp(data.ip)
      setCountry(data.location.country);
      setMapState([data.location.lat, data.location.lng]);
      setIsLoading(false);
    }

  }


  return (
    <Container maxW={'container.xl'} m={'auto'} position={'relative'}>
      <StarterMap mapState={mapState} isLoading={isLoading}/>
      <Overlay country={country} ip={ip} isLoading={isLoading}/>
    </Container>
  )
}

export default App
