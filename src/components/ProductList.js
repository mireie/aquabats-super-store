import React from "react";
import Product from "./Product"
import PropTypes from "prop-types"

function ProductList(props) {
  return (
    <React.Fragment>
      {props.productList.map((product, index) =>
        <Product names={product.name}
          description={product.description}
          quantity={product.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
}

export default ProductList