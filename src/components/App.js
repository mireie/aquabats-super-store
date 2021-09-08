import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap"
import ProductControl from "./ProductControl"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <div className="col-4">
            <Sidebar />
          </div>
          <Col>
            <ProductControl />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
