import React from 'react';
import './Card.css';

const Card = (props) => {

    const {name, price, coin,change,counter, img} = props;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

      const changeColor = (change) =>{
        if(change < 0){
          return(<span className="crypto__red">{change}%</span>)
        }else{
          return(<span className="crypto__green">{change}%</span>)
        }
      }  
  return (
    <div className="card">
      <div className="card__title">
        <div>{`${counter}. ${name}`}</div>
        <div>
            <img src={img} width="30"/>
        </div>
      </div>
      <div className="card__details">
        <p>Price: {formatter.format(price)}</p>
        <p>Market Cap: {formatter.format(coin)}</p>
        <p>Daily Change: {changeColor(change)}</p>
      </div>
    </div>
  );
};

export default Card
