import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { clearCrypto } from '../actions';
import Card from '../components/Card';

import './Homepage.css';

const Homepage = () =>{

    const stats = useSelector((state) => state.crypto.cryptoData.stats);
    const coins = useSelector((state) => state.crypto.cryptoData.coins);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearCrypto());
    }, []);

    const renderStats = () =>{
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          })
        if(stats){
        return (
            <>
              
              <div className="cryptostats__container">
         
                  <div className="cryptostats__wrapper">
                    <div className="ui statistic">
                      <div className="value">{stats.total}</div>
                      <div className="label">Total Currencies</div>
                    </div>
                  </div>
                  <div className="cryptostats__wrapper">
                  <div className="ui statistic">
                      <div className="value">{stats.totalExchanges}</div>
                      <div className="label">Total Exchanges</div>
                  </div>
                  
                  </div>
                  <div className="cryptostats__wrapper">
                  <div className="ui statistic">
                      <div className="value">{stats.totalMarkets}</div>
                      <div className="label">Total Markets</div>
                  </div>
                  </div>
            
    
            
                  <div className="cryptostats__wrapper">
                  <div className="ui statistic">
                      <div className="value">{formatter.format(stats.totalMarketCap)}</div>
                      <div className="label">Total Market Cap</div>
                  </div>
                  </div>
                  <div className="cryptostats__wrapper">
                  <div className="ui statistic">
                      <div className="value">{formatter.format(stats.total24hVolume)}</div>
                      <div className="label">Total Volume</div>
                  </div>
                  </div>
             
              </div>
            </>
       
        );
    }
    }


    const renderCards = () => {
      if(coins){
        return coins.map((coin,i) => {
            if(i < 10){
                return (
                    <div className="topcrypto__cards">
                      <Link to={`/crypto/${coin.id}`}> 
                      <Card
                        key={coin.id}
                        counter={i+1}
                        name={coin.name}
                        price={coin.price}
                        coin={coin.marketCap}
                        change={coin.change}
                        img={coin.iconUrl}
                      />
                      </Link>
                      
                    </div>
                  );
            }
          
        });
      }
    };

    return(<div className="homepage">
        <div className="homepage__cryptostats">
            <div className="cryptostats__header">
            <h1>Global Cryto Stats</h1>
            </div>
        
        {renderStats()}
        </div>
        <div className="homepage__topcrypto">
            <h1>Top 10 CryptoCurrencies</h1>
            <div className="topcrypto__flex">
            {renderCards()}
            </div>
            
        </div>
        
    </div>)

    
}

export default Homepage;