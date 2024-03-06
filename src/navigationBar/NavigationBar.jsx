import { Container, Navbar } from 'react-bootstrap';

import { ThemeContext } from '../layout/Layout';

import ThemeToggle  from "../themeToggle/ThemeToggle";

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import "./NavigationBar.scss"

const NavigationBar = () => {
  const { theme } = useContext(ThemeContext)
  
  const navContainer = "navContainer-" + theme

  return (
    <Navbar className={`align-items-center m-0 pt-3 pb-2 ${navContainer}`}>
      <Container>
        <Navbar.Brand to="/"><Link><h1>Where in the world?</h1></Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <ThemeToggle/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar