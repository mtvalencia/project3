import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class PastDeals extends Component {
  state = {
    deals: [],

  };

  componentDidMount() {
    this.loadDeals();


  }

  loadDeals = () => {
    API.getDealsInactive()
      .then(res =>
        this.setState({ deals: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3 sm-3"/>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Past Deals</h1>
            </Jumbotron>
            {this.state.deals.length ? (
              <List>
                {this.state.deals.map(deal => (
                  <ListItem key={deal._id}>
                    <Link to={"/pastdeals/" + deal._id}>
                      <div className="text-center">
                      <h1>
                        {deal.business}
                      </h1>
                      <h4>
                        {deal.category}
                      </h4>
                      </div>  
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>Nothing here!</h3>
            )}
          </Col>
          <Col size="md-3 sm-3"/>
        </Row>
      </Container>
    );
  }
}

export default PastDeals;