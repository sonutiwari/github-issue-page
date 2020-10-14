import "./CustomModal.scss"

import { BoxArrowUpRight } from "react-bootstrap-icons"
import { Modal } from "react-bootstrap"
import React from "react"

export default function CustomModal({
  show,
  handleClose,
  handleItemClick,
}: {
  show: boolean
  handleClose: () => void
  handleItemClick: (filter: string) => void
}) {
  return (
    <Modal show={show} onHide={handleClose} keyboard={false} id="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Filter Issues</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {[
            "Open issues and pull requests",
            "your Issues",
            "Your pull requests",
            "Everything assigned to you",
            "Everything mentioning you",
          ].map((filter, index) => (
            <li key={index} onClick={() => handleItemClick(filter)}>
              {filter}
            </li>
          ))}
        </ul>
        <a>
          <h6 id="more-filters-link">
            <BoxArrowUpRight style={{ margin: "0 5px" }} />
            View Advanced search syntax
          </h6>
        </a>
      </Modal.Body>
    </Modal>
  )
}
