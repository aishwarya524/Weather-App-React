import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../country/CountryScreen.css';

const CountryScreen = () => {
  const { name } = useParams()
  const [ countryDetails, setCountryDetails] = useState()
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`). 
          then((response) => {
            if(response.status >= 400) {
              throw new Error("Server responds with error!");
            }
            return response.json();
          }).
          then((data) => {
            return data;
          }
    ).then((apiCountryDetails) => {
      setCountryDetails(apiCountryDetails)
      console.log(countryDetails)
    }).catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div>
        <div className='header'>Country details</div>
        {countryDetails && countryDetails.map((singleCountry, index) => {
          return(
            <div key={index}>
            <div className='flag-image-container'>
          <img src={singleCountry.flags.png} alt='flag' className='flag-image'/>
        </div>
        <div className='text-container'>
          <div className='text'>{`Capital : ${singleCountry.capital}`}</div>
          <div className='text'>{`Country's Population : ${singleCountry.population}`}</div>
          <div className='text'>{`Latitude : ${singleCountry.latlng[0]} deg`}</div>
          <div className='text'>{`Longitude : ${singleCountry.latlng[1]} deg`}</div>
        </div>
        <div className='btn-container'>
          <Link className="active-btn" to={`/weather/${singleCountry.capital}`} style={{fontSize: 18, padding: 10, paddingRight: 20, paddingLeft: 20, color: 'white', textDecoration: 'none'}}>Capital Weather</Link>
        </div>
        </div>
          )
        })}        
    </div>
  )
}

export default CountryScreen