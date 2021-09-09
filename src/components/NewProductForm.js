import React from "react";
import { v4 } from 'uuid'
import PropTypes from "prop-types"
import ProductForm from "./ProductForm";

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
      <ProductForm
        formSubmissionHandler={handleNewProductFormSubmission}
        formButtonText="Add Product"
        prodBool={false}
      ></ProductForm>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default NewProductForm