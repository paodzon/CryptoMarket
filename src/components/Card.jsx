import React from 'react';
import './Card.css';

const Card = (props) => {

    const {name, price, coin,change,id, img} = props;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
  return (
    <div className="card">
      <div className="card__title">
        <div>{`${id}. ${name}`}</div>
        <div>
            <img src={img} width="30"/>
        </div>
      </div>
      <div className="card__details">
        <p>Price: {formatter.format(price)}</p>
        <p>Market Cap: {formatter.format(coin)}</p>
        <p>Daily Change: {change} %</p>
      </div>
    </div>
  );
};

export default Card
