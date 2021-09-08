import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"

function Product(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>{props.description}</p>
            <ul>
              <li>Quantity: {props.quantity}</li>
              <li>ID: {props.id}</li>
            </ul>
          </Card.Text>
          <Button
            type="submit"
            value="addition"
            variant="success"
            className="m-3"
            idName={props.id}>
            Add 1
          </Button>
          <Button
            type="submit"
            value="subtraction"
            variant="warning"
            className="m-3"
            idName={props.id}>
            Subtract 1
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}


Product.propTypes = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Product