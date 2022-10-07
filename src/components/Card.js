import React from "react";
import "./Card.css";

const Card = (props) => {
  const { imgSrc, brand, id, price } = props;
  return (
    <div className="card">
      <img src={imgSrc} />
      <div className="container">
        <h4>
          <b>{`${brand} ${id}`}</b>
        </h4>
        <p>{`Price: ${price}`}</p>
      </div>
      {/*TODO add currency icon and price*/}
    </div>
  );
};

export default Card;
