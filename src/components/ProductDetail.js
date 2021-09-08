import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

function ProductDetail(props) {
  const { product } = props;

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <Button
        className="btn-danger"
        onClick={() => props.deleteProduct(product.id)}
      > Delete</Button>
    </React.Fragment >
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func
};

export default ProductDetail
