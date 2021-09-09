import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap"


export default function Cart(props) {
  const { items } = props

  let totalCartItems = 0
  items.forEach((item) => {
    totalCartItems += item.quantity 
  })
  
  console.log(items)
  return (
    <Row>
      <Col>
        Items in Cart: {totalCartItems}
      </Col>
    </Row>
  )
}
