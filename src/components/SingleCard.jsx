import "./SingleCard.css";
import React from "react";

const SingleCard = ({ card }) => {
  function handleClick() {
    console.log(card);
  }
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          onClick={handleClick}
          className="back"
          src="/img/cover.png"
          alt="card back"
        ></img>
      </div>
    </div>
  );
};

export default SingleCard;
