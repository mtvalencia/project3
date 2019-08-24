import React from "react";
import { Col, Row, Container } from "../components/Grid";


function LogOut() {
        return (
          <Container fluid>
            <Row>
            <Col size="md-3 sm-3"/>
              <Col size="md-6 sm-6">
                <h2 className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">You have logged out!</h2>
              </Col>
              <Col size="md-3 sm-3"/>
            </Row>
          </Container>
        );
      }

export default LogOut;