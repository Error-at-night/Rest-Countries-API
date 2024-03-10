import { useContext } from "react"

import "./loader.scss"

import { Container, Row, Col } from "react-bootstrap"

import { ThemeContext } from "../layout/Layout"

const Loader = () => {
  const { theme } = useContext(ThemeContext)

  const loaderContainer = "loaderContainer-" + theme

  return (
    <Container className={`${loaderContainer} pt-3 align-items-center d-flex justify-content-center`}>
        <Row className="row">
            <Col xs={12} sm={12} md={12} lg={12}>
                <div className="custom-loader"></div>
            </Col>
        </Row>
    </Container>
  )
}

export default Loader