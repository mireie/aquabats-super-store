import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Quantity: {props.quantity}</p>
    </React.Fragment>
  );
}


Product.propTypes = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Product