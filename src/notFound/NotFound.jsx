import { useContext } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { ThemeContext } from '../layout/Layout'

import "./notFound.scss"

const NotFound = () => {
  const { theme } = useContext(ThemeContext)
  const notFound = "notFound-" + theme
  return (
    <Container className={`${notFound} pt-4 text-center`}>
      <Row>
        <Col xs={12}>
            <h2>404 page not found</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound