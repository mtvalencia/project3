import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./pages/Add";
import CurrentDeals from "./pages/CurrentDeals";
import AllDeals from "./pages/AllDeals";
import PastDeals from "./pages/PastDeals";
import CurrentDealDetails from "./pages/CurrentDealDetails";
import PastDealDetails from "./pages/PastDealDetails";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import LogOut from "./pages/LogOut";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "./react-auth0-wrapper";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div style={{textAlign:"center", color:"white", margin:"20%", textShadow:"4px 4px 8px #000000"}}>
        <p><i className="fas fa-fan fa-spin fa-5x"></i></p>
        <h1 className="Display-1">Loading</h1>
      </div>
    );
  }
  return (
    <div className="App">
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/currentdeals" component={CurrentDeals} />
          <Route exact path="/currentdeals/:id" component={CurrentDealDetails} />
          <Route exact path="/alldeals" component={AllDeals} />
          <Route exact path="/pastdeals" component={PastDeals} />
          <Route exact path="/pastdeals/:id" component={PastDealDetails} />
          <Route component={NoMatch} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/add" component={Add} />
          <PrivateRoute path="/alldeals" component={AllDeals} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;