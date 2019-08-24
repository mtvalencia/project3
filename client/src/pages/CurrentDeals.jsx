import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Ticker from "../components/Ticker/";


class CurrentDeals extends Component {
  state = {
    deals: []
  };

  componentDidMount() {
    this.loadDeals();
  }

  async loadDeals() {
    let deals = await API.getDeals();
    this.setState({ deals: deals.data});
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3 sm-3"/>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Current Deals</h1>
            </Jumbotron>
            {this.state.deals.length ? (
              <List>
                {this.state.deals.map(deal => (
                  <ListItem key={deal._id}>
                      <div className="text-center">
                        <h3>
                          {deal.business}
                        </h3>
                        <h5>
                          {deal.category}
                        </h5>
                        <Ticker golivedate={deal.golivedate} Status = {deal.status} Link ={<Link to={"/currentdeals/" + deal._id}><h4 style={{color:"#2D4784"}}><i className="fas fa-bell fa-1x animated infinite tada delay-2s" style={{color:"#C69533"}}></i>&nbsp;View Deal</h4></Link>} ></Ticker>
                      </div>
                    
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

export default CurrentDeals;