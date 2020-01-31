import React from "react";

function RestaurantsList(props) {
  return (
    <div className="card grid-item-3-1">
      <div className="card__side1 card__side1--front">
        <div className="card__picture card__picture--1">
          <img
            id="card__picture--img"
            src={props.item.image}
            alt={"Restaurant" + props.item.name}
          ></img>
        </div>
        <div className="product-name">
          <h2 className="product-name--text">{props.item.name}</h2>
          <h3 className="product-name--text product-hidden--text">
            {props.item.city}
          </h3>
        </div>
      </div>
      <div className="card__side1 card__side1--back">
        <div className="card__side1--card">
          <div className="card__side1--pricebox">
            <p className="card__side1--price-title">{props.item.name}</p>
            <div className="card__details">
              <ul className="card__details--ul">
                <li>{props.item.city}</li>
                <li>{props.item.description}</li>
              </ul>
            </div>
            <p className="card__side1--price-value">
              Delivery only: {props.item.delivery_price.toFixed(2)}€
            </p>
          </div>
          <a href="#">
            <button className="bttn btn--medium">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsList;
