import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"

function Product(props) {
  const prod = {name: props.name, description: props.description, quantity: props.quantity, id: props.id}
  return (
    <React.Fragment>
      <div className="col-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title onClick={() => props.whenProductClicked(props.id)}>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
              </Card.Text>
              <ul>
                <li>Quantity: {props.quantity}</li>
                <li>ID: {props.id}</li>
              </ul>
            <Button
              type="submit"
              variant="success"
              className="m-3"
              onClick={() => props.stockPlus(prod)}
              >
              Add 1
            </Button>
            <Button
              type="submit"
              variant="warning"
              className="m-3"
              onClick={() => props.stockMinus(prod)}
              >
              Subtract 1
            </Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  stockPlus: PropTypes.func
}

export default Product

