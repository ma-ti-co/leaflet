import React, {useEffect, useState} from 'react'
import { Container, Card, CardHeader, Heading, CardBody, Image } from '@chakra-ui/react'

const Overlay = ({country, ip, isLoading}) => {

  const [countryData, setCountryData] = useState<any | null>(null)

  useEffect(()=> {
    getCountryData();
  },[country])

  const getCountryData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
    const data = await response.json();
    setCountryData(data[0])
  }

  return (
    <Card  maxW={'64rem'} m={'auto'} pos="absolute" top="0" right="0" style={{'zIndex':'999'}} margin={'12'}>
      {!isLoading && countryData ?
      <>
      <CardHeader>
        <Heading size='md'>Your current IP: {ip}</Heading>
      </CardHeader>
      <CardBody>
      <Image
        boxSize='100px'
        fit='contain'
        src={countryData.flags.png}
      />
      </CardBody>
      </>
    :''}
    </Card>
  )
}

export default Overlay
