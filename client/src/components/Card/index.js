import React from "react";
import "./style.css";

const CardImage = ({children}) =>
    <div>
        <img src={children} className="card-img-top" alt="..."></img>
    </div>;

const CardInfo = ({business, deal, location}) =>
<div>
    <h1 className="card-title">{business}</h1>
    <h5 className="card-text">{deal}</h5>
    <p className="card-text">{location}</p>
</div>

function Card({photo, business, deal, location}) {
    return (
  <div className="card mb-3">
      <CardImage>{photo}</CardImage>
  <div className="card-body">
      <CardInfo business={business} />
      <CardInfo deal={deal} />
      <p>Location:</p>
      <CardInfo location={location} />
  </div>
      </div>
    );
  }

  export default Card