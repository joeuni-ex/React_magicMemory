import "./SingleCard.css";
import React from "react";

const SingleCard = (props) => {
  return (
    <div className="card" key={props.id}>
      <div>
        <img className="front" src={props.card.src} alt="card front"></img>
        <img className="back" src="/img/cover.png" alt="card back"></img>
      </div>
    </div>
  );
};

export default SingleCard;
