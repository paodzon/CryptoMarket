import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { clearCrypto } from "../actions";
import "./Cryptocurrencies.css";

const Cryptocurrencies = () => {
  const cryptos = useSelector((state) => state.crypto.cryptoData.coins);
  const [cryptoData, setData] = useState(cryptos);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(clearCrypto());
  }, []);

  useEffect(() => {
    const filteredData = cryptos?.filter((crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search, cryptos]);

  const renderSearch = () => {
    return (
      <div class="ui search">
        <div class="ui icon input">
          <input
            class="prompt"
            type="text"
            placeholder="Search crypto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    );
  };

  const changeColor = (change) =>{
    if(change < 0){
      return(<div className="crypto__red">{change}%</div>)
    }else{
      return(<div className="crypto__green">{change}%</div>)
    }
  }
 
  const renderCryptos = () => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
    });
    if (cryptoData) {
      return cryptoData.map((crypto, i) => {
        return (
          
            <tr>
              <td>{i + 1}</td>
              <td>
              <Link className="crypto__align" to={`/crypto/${crypto.id}`}>
                  <img src={crypto.iconUrl} width="20" /> {crypto.name}
               </Link>
              </td>
              <td>${formatter.format(crypto.price)}</td>
              <td>{changeColor(crypto.change)}</td>
              <td>${formatter.format(crypto.marketCap)}</td>
              <td>${formatter.format(crypto.volume)}</td>
              <td>{formatter.format(crypto.circulatingSupply)}</td>
            </tr>
       
        );
      });
    }
  };

  return (
    <div className="cryptocurrencies">
      <div className="cryptocurrencies__header">
        <h1>Today's Cryptocurrency Prices</h1>
        {renderSearch()}
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Circulating Supply</th>
          </tr>
        </thead>
        <thead>{renderCryptos()}</thead>
      </table>
    </div>
  );
};

export default Cryptocurrencies;
