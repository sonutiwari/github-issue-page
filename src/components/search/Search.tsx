import "./Search.scss"

import { FormControl, FormLabel, Row } from "react-bootstrap"
import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Search() {
  const [searchInput, setSearchInput] = useState("")
  const handleSearchInputChange = e => {
    setSearchInput(e.target.value)
  }
  return (
    <Row>
      <FormLabel htmlFor="search" className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </FormLabel>
      <FormControl
        type="text"
        autoComplete="on"
        value={searchInput}
        id="search"
        placeholder="search"
        className="search-input"
        style={{ padding: "0 25px" }}
        onChange={handleSearchInputChange}
      />
    </Row>
  )
}
