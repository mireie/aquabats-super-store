import React from "react";
import PropTypes from "prop-types"
import ProductForm from "./ProductForm";

function EditProduct(props) {
  function handleEditProductFormSubmission(event) {
    event.preventDefault()
    props.editProductFunction(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        id: props.product.id
      }
    )
  }

  return (
    <React.Fragment>
      <h2>Edit Product</h2>
      <ProductForm
        formSubmissionHandler={handleEditProductFormSubmission}
        formButtonText="Edit"
        product={props.product}
        prodBool={true}
      ></ProductForm>
    </React.Fragment>
  )
}

EditProduct.propTypes = {
  editProductFunction: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default EditProduct