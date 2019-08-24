import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn, DateTime, TimeZone, Status, Date, TextArea } from "../components/Form";
// import cd from '../components/Timer/countdown';


class Add extends Component {
  state = {
    name: "",
    business: "",
    category: "",
    startdate: "",
    enddate: "",
    golivedate: "",
    timezone: "",
    status: "",
    deal: [],
    location: "",
    photo: ""
  };

  componentDidMount() {

    this.setState({timezone: "-0600"});
    this.setState({status: "Active"})

  }

  componentDidUpdate() {
    console.log('componentDidUpdate fired');

  }

  handleInputChange = event => {
    //console.log('fired', event.target.name);
    const { value, name } = event.target;
    this.setState({[name]: value}, () => console.log('state callback',[name])
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.business && this.state.category) {
      API.saveDeal({
        name: this.state.name,
        business: this.state.business,
        category: this.state.category,
        startdate: this.state.startdate,
        enddate: this.state.enddate,
        golivedate: this.state.golivedate,
        timezone: this.state.timezone,
        status: this.state.status,
        deal: this.state.deal,
        location: this.state.location,
        photo: this.state.photo
      })
        .then( window.location.reload())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"/>
          <Col size="md-6">
            <Jumbotron>
              <h1>Admin Add a Deal</h1>
            </Jumbotron>
            <form className="cover-container2"> Name:
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="(required)"
              />Business:
              <Input
                value={this.state.business}
                onChange={this.handleInputChange}
                name="business"
                placeholder="(required)"
              />Category:

              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="(required)"
              /> Start Date:

              <Date
                value={this.state.startdate}
                onChange={this.handleInputChange}
                name="startdate"
              />End Date:

              <Date
                value={this.state.enddate}
                onChange={this.handleInputChange}
                name="enddate"
              />Go Live Date (Timer):

              <DateTime
                value={this.state.golivedate}
                onChange={this.handleInputChange}
                name="golivedate"
              />Time Zone:
              
              <TimeZone
                // timeZone={this.state.timezone}
                onChange={this.handleInputChange}
                name="timezone"
              />Status:     

              <Status
                value={this.state.status}
                onChange={this.handleInputChange}
                name="status"
              />Deal:

               <TextArea
                value={this.state.deal}
                onChange={this.handleInputChange}
                name="deal"
                placeholder="(required)"
              />Location:      

              <TextArea
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="(required)"
              />Photo (URL):  

              <Input
                value={this.state.photo}
                onChange={this.handleInputChange}
                name="photo"
                placeholder="Photo Link"
              />        

              <FormBtn
                disabled={!(this.state.name && this.state.business && this.state.category && this.state.startdate && this.state.enddate && this.state.golivedate && this.state.deal && this.state.location && this.state.photo)}
                onClick={this.handleFormSubmit}
              >
                Submit Deal
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3"/>
        </Row>
      </Container>
    );
  }
}

export default Add;
