import { useContext, useEffect } from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import { ThemeContext } from '../layout/Layout';

import { Link } from 'react-router-dom';

import "./Home.scss"

import useFetch from '../customHook/customHook';

import ScrollToTopButton from '../scrollToTopButton/ScrollToTopButton';
import Loader from '../loader/Loader';

const Home = () => {
 
  const { theme } = useContext(ThemeContext)

  const { search, setSearch, countries, region, setRegion, error, message, setMessage, isLoading } = useFetch("https://restcountries.com/v3.1/all")

  const homeContainer = "homeContainer-" + theme

  const searchedCountries = countries.filter((country) => {
    if (region !== '') {
      return country.region.toLowerCase() === region.toLowerCase() && 
      country.name.common.toLowerCase().includes(search.toLowerCase())
    } else {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
  })

  useEffect(() => {
    if(search !== "" && searchedCountries.length === 0) {
      setMessage("No country found")
    } else {
      setMessage("")
    }
  }, [searchedCountries, search, setMessage])

  return (
    <Container className={`pt-5 ${homeContainer}`}>
      <ScrollToTopButton/>
      <Row className="row justify-content-between">
        <Col sm={6} md={6} lg={6}>
          <div>
            <input 
              type="search" 
              placeholder='Search for a country...'
              value={search}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
          </div>
        </Col>
        <Col sm={6} md={6} lg={6} className="mt-4 mt-sm-0">
          <div className="d-flex justify-content-start justify-content-sm-end">
            <label className='select'>
              <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </label>
          </div>
        </Col>
      </Row>
      <Row className="row justify-content-start mt-5">
        {isLoading ? <Loader/> : searchedCountries.map((country, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index} className="mb-5">
            <Link to={`/name/${country.name.common}`}>
              <img src={country.flags.png} alt={country.flags.alt} height={200} width="auto"/>
              <div className="px-3 pt-3 pb-1 countryDetails">
                <h5>{country.name.common}</h5>
                <div className="mt-3">
                  <p>Population: <span>{country.population}</span></p>
                  <p>Region: <span>{country.region}</span></p>
                  <p>Capital: <span>{country.capital}</span></p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      {error && 
        <Row>
          <Col xs={12}>
            <h2 className='error'>{error}</h2>
          </Col>
        </Row>
      }
      {message && 
        <Row>
          <Col xs={12}>
            <h2 className='error'>{message}</h2>
          </Col>
        </Row>
      }
    </Container>
  )
}

export default Home