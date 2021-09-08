import React from "react";
import { v4 } from 'uuid'
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault()
    props.onNewProductCreation(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        id: v4()
      }
    )
  }
  return (
    <React.Fragment>
      <h2>Add a Product</h2>
      <Form onSubmit={handleNewProductFormSubmission}>
        <Form.Group
          className="mb-3"
          controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"></Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="productDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3} name="description" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="produtQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          Add Product
        </Button>
      </Form>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
}

export default NewProductForm