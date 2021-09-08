import React from "react";
import PropTypes from "prop-types"

function ProductDetail(props){
  const { product } = props;

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p> 
    </React.Fragment>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object
};

export default ProductDetail
