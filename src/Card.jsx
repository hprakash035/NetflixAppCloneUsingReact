import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgurl} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.about}</p>
        <a href={props.url} className="btn btn-primary" target="_blank">
          Click Here To Watch Now
        </a>
      </div>
    </div>
  );
};

export default Card;
