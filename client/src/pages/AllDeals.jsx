import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";



class AllDeals extends Component {
  state = {
    deals: []
  };

  componentDidMount() {
    this.loadDeals();
  }

  loadDeals = () => {
    API.getAllDeals()
      .then(res =>
        this.setState({ deals: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteDeal = id => {
    API.deleteDeal(id)
      .then(res => this.loadDeals())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3 sm-3"/>
          <Col size="md-6 sm-6">
            <Jumbotron>
              <h1>Admin All Deals</h1>
            </Jumbotron>
            {this.state.deals.length ? (
              <List>
                {this.state.deals.map(deal => (
                  <ListItem key={deal._id}>
                    <DeleteBtn ariaLabel="delete deal" onClick={() => this.deleteDeal(deal._id)} />
                      <div className="text-center">
                      <h1>
                        {deal.business}
                      </h1>
                      <h4>
                        {deal.category}
                      </h4>
                      <h4>
                       Status: {deal.status}
                      </h4>
                      </div>  
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-3 sm-3"/>
        </Row>
      </Container>
    );
  }
}

export default AllDeals;