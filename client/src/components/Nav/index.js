import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

function Nav() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
<nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#004d4d"}}>
  <a className="navbar-brand" href="/" style={{fontSize:"28px"}}>DazzDeals</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/currentdeals">Current Deals</a>
      <a className="nav-item nav-link" href="/pastdeals">Past Deals</a>
      
      {isAuthenticated && (
      <span className="navbar-nav">
        <a className="nav-item nav-link" href="/alldeals">All Deals</a>
        <a className="nav-item nav-link" href="/add">Add Deal</a>
        <a className="nav-item nav-link" href="/profile"><i class="far fa-user-circle fa-lg" alt="Profile"></i></a>
      </span>
    )}

{!isAuthenticated && (
        <button type="button" className="btn btn-outline-info btn-sm"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Admin Log in
        </button>
      )}

      {isAuthenticated && <button type="button" className="btn btn-outline-info btn-sm" onClick={() => logout()}>Admin Log out</button>}
      
    </div>
  </div>
</nav>
  );
}

export default Nav;