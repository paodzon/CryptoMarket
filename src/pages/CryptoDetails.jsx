import React, { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCrypto } from "../actions";
import "./CryptoDetails.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CryptoDetails = () => {

  const navigate = useNavigate();
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const coinDetails = useSelector((state) => state.crypto.cryptoDetails.coin);
  useEffect(() => {
    dispatch(getCrypto(coinId));
  }, [coinId]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  const formatter2 = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  });
  if(!coinDetails){
    return <div>LOADING</div>
  }
  return (
    <div className="cryptodetails">
      <div className="cryptodetails__rank">Rank #{coinDetails.rank}</div>
      <div className="cryptodetails__header">
      <div className="cryptodetails__nameHeader">
        <img src={coinDetails.iconUrl} width="30" />
        <h2>{coinDetails.name}</h2>
        <div className="cryptodetails__symbol">{coinDetails.symbol}</div>
      </div>
      <div className="cryptodetails__goback" onClick={() => navigate('/cryptocurrencies')}>
       <ArrowBackIcon />
      </div>
      </div>
     
      <div className="cryptodetails__price">
        <h1>{formatter.format(coinDetails.price)}</h1>
      </div>

      <div className="cryptodetails__stats">
        <div className="cryptodetails__statsleft">
          <div className="cryptodetails__statswrapper">
            <div>Market Cap</div>
            <div className="statswrapper__margin">{formatter.format(coinDetails.marketCap)}</div>
          </div>
          <div className="cryptodetails__statswrapper">
            <div>24 Hour Trading Vol</div>
            <div className="statswrapper__margin">{formatter.format(coinDetails.volume)}</div>
          </div>
        </div>
        <div className="cryptodetails__statsright">
          <div className="cryptodetails__statswrapper">
            <div>Circulating Supply</div>
            <div className="statswrapper__margin">{formatter2.format(coinDetails.circulatingSupply)}</div>
          </div>
          <div className="cryptodetails__statswrapper">
            <div>Total Supply </div>
            <div className="statswrapper__margin">{formatter2.format(coinDetails.totalSupply)}</div>
          </div>

        </div>
      </div>

      <div className="cryptodetails__description">
        <h2>What is {coinDetails.name}?</h2>
        <div dangerouslySetInnerHTML={{__html: `${coinDetails.description}`}}></div>
      </div>
    </div>
  );
};

export default CryptoDetails;
