import { Container, Row, Col } from 'react-bootstrap'

import { useNavigate, useParams } from 'react-router-dom'

import useFetch from '../customHook/customHook'

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import { useContext } from 'react';

import { ThemeContext } from '../layout/Layout';

import "./singleCountry.scss"

const SingleCountry = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const { countries, error } = useFetch("https://restcountries.com/v3.1/name/" + name)

  const { theme } = useContext(ThemeContext)

  const singleCountry = "singleCountry-" + theme

  console.log(countries)

  return (
    <Container className={`${singleCountry} pt-5`}>
      <Row>
        <Col>
          <button onClick={() => navigate(-1)} className='d-flex align-items-center'>
            <ArrowLeftIcon width={20} className='me-2'/> 
            Back
          </button>
        </Col>
      </Row>
        {countries.map((country, index) => (
           <Row className='mt-5 align-items-center justify-content-between' key={index} >
              <Col xs={12} sm={12} lg={6}>
                <img src={country.flags.png} alt={country.flags.alt} className="img-fluid"/>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className='mb-4 mt-5'>
                    <div className='ms-lg-5'>
                      <h3 className='mb-3'>{country.name.common}</h3>
                      <p>Native Name: <span>{country.nativeName}</span></p>
                      <p>Population: <span>{country.population}</span></p>
                      <p>Region: <span>{country.region}</span></p>
                      <p>Sub Region: <span>{country.subregion}</span></p>
                      <p>Capital: <span>{country.capital}</span></p>
                    </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className=''>
                  <p>Continent: <span>{country.continents}</span></p>
                  <p>Start of Week:  <span>{country.startOfWeek}</span></p>
                  <p>Status: <span>{country.status}</span></p>
                </div>
              </Col>
          </Row>
        ))}
        {error && 
          <Row className='mt-5'>
            <h2 className='error'>{error}</h2>
          </Row>
        }
    </Container>
  )
}

export default SingleCountry