import { Container, Row, Col } from 'react-bootstrap'

import { useNavigate, useParams } from 'react-router-dom'

import useFetch from '../customHook/customHook'

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import React, { useContext } from 'react';

import { ThemeContext } from '../layout/Layout';

import Loader from "../loader/Loader"

import "./singleCountry.scss"

const SingleCountry = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const { countries, error, isLoading } = useFetch("https://restcountries.com/v3.1/name/" + name)

  const { theme } = useContext(ThemeContext)

  const singleCountry = "singleCountry-" + theme

  console.log(countries)

  const matchedCountry = countries.find((country, index) => country.name.common.toLowerCase() === name.toLowerCase())

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
        {!isLoading && matchedCountry ? (
           <Row className='mt-5 align-items-center justify-content-between'>
              <Col xs={12} sm={12} lg={6}>
                <img src={matchedCountry.flags.png} alt={matchedCountry.flags.alt} className='img-fluid'/>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className='mb-4 mt-5'>
                    <div className='ms-lg-5'>
                      <h3 className='mb-3'>{matchedCountry.name.common}</h3>
                      <p>Native Name: 
                        {Object.entries(matchedCountry.name.nativeName).map(([key, value], index) => (
                          index === 0 && 
                          <>  
                            {" "}<span key={index}>{value.common}</span>
                          </>
                        ))}
                      </p>
                      <p>Population: <span>{matchedCountry.population.toLocaleString()}</span></p>
                      <p>Region: <span>{matchedCountry.region}</span></p>
                      <p>Sub Region: <span>{matchedCountry.subregion}</span></p>
                      <p>Capital: <span>{matchedCountry.capital[0]}</span></p>
                      {matchedCountry.borders ? 
                        <p className='mt-3 d-none d-lg-inline-block'>Border Countries: {" "}
                          <span className='borderr'>{matchedCountry.borders[0]}</span>{" "}
                          <span className='borderr'>{matchedCountry.borders[1]}</span>{" "}
                          <span className='borderr'>{matchedCountry.borders[2]}</span>
                        </p> : 
                        <p className='mt-3 d-none d-lg-inline-block'>No Border Information Available</p> 
                      }
                    </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className='d-block'>
                <div className=''>
                  <p>Top Level Domain: <span>{matchedCountry.tld}</span></p>
                  <p> Currencies: 
                    {matchedCountry.currencies && Object.keys(matchedCountry.currencies).length > 0 ?
                      Object.entries(matchedCountry.currencies).map(([key, value], index) => (
                        <>
                          {" "}
                          <span key={index}>
                            {value.name}
                          </span>
                        </>
                      )) :
                        <>
                          {" "}<span>No currency information available</span>
                        </>
                    }
                  </p>
                  <p>Languages: 
                    {Array.isArray(matchedCountry.languages) ?
                      matchedCountry.languages.map((language, index, array) => (
                        <React.Fragment key={index}>
                          {" "}
                          <span>
                            {language}
                            {index !== array.length - 1 && ', '}
                          </span>
                        </React.Fragment>
                      )) 
                      :
                      Object.values(matchedCountry.languages).map((language, index, array) => (
                        <React.Fragment key={index}>
                          {" "}
                          <span>{language}
                            {index !== array.length - 1 && ', '}
                          </span>
                        </React.Fragment>
                    ))}
                  </p>
                </div>
              </Col>
              <Col>
                {matchedCountry.borders ? 
                  <p className='d-lg-none'>Border Countries: {" "}
                    <span className='borderr'>{matchedCountry.borders[0]}</span>{" "}
                    <span className='borderr'>{matchedCountry.borders[1]}</span>{" "}
                    <span className='borderr'>{matchedCountry.borders[2]}</span>
                  </p>: 
                  <p className='d-lg-none'>No Border Information Available</p>
                }
              </Col>
          </Row>
        ): <Loader/> }
        {error && 
          <Row className='mt-5'>
            <h2 className='error'>{error}</h2>
          </Row>
        }
    </Container>
  )
}

export default SingleCountry