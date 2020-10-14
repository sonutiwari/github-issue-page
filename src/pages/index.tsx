import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

import { Col, Container, Row } from "react-bootstrap"

import React from "react"
import Search from "../components/search/Search"
import SelectOptions from "../components/customSelect/SelectOptions"

export default function Home() {
  return (
    <Container>
      <Row className="search-container">
        <Col xs={1}>
          <SelectOptions />
        </Col>
        <Col xs={8}>
          <Search />
        </Col>
      </Row>
    </Container>
  )
}
