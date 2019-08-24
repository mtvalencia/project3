import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

class CurrentDealDetails extends Component {
  state = {
    deal: {}
  };
  // When this component mounts, grab the deal with the _id of this.props.match.params.id
  // e.g. localhost:3000/deals/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getDeal(this.props.match.params.id)
      .then(res => this.setState({ deal: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <Card photo={this.state.deal.photo} business={this.state.deal.business}
            deal={this.state.deal.deal} location={this.state.deal.location}>
            </Card>
            <Row>
              <Link to="/currentdeals">Back</Link>
            </Row>
            </Col>
          <Col size="md-3" />
        </Row>
      </Container>
    );
  }
}

export default CurrentDealDetails;
