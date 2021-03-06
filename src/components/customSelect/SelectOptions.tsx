import "./SelectOptions.scss"

import { Button, Modal } from "react-bootstrap"
import React, { Fragment, useState } from "react"

import CustomModal from "../CustomModal/CustomModal"
import caretDown from "../../../static/images/caret_down.svg"

export default function SelectOptions() {
  const [buttonText, setButtonText] = useState("Filters")
  const [showFilteredOptions, setShowFilteredOptions] = useState(false)
  const handleFilterButtonClick = () => {
    setShowFilteredOptions(showFilteredOptions => !showFilteredOptions)
  }
  const handleItemClick = (filter: string) => {
    console.log(filter)
    handleFilterButtonClick()
  }
  return (
    <Fragment>
      <Button
        variant="none"
        className="filter-btn"
        onClick={handleFilterButtonClick}
      >
        {buttonText}
        <span className="caret-image">
          <img src={caretDown} alt="caret-down" />
        </span>
      </Button>
      {showFilteredOptions ? (
        <CustomModal
          show={showFilteredOptions}
          handleClose={handleFilterButtonClick}
          handleItemClick={handleItemClick}
        />
      ) : null}
    </Fragment>
  )
}
