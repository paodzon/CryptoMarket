import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import './Exchanges.css'

const Exchanges = () => {

    const exchanges = useSelector((state) => state.crypto.exchanges.exchanges)

    const [search,setSearch] = useState('');
    const [exchangesData, setData] = useState(exchanges);

    useEffect(() =>{
        const filteredData = exchanges?.filter((exchange) => exchange.name.toLowerCase().includes(search.toLowerCase()));
        setData(filteredData);
    },[search,exchanges])

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

    const renderExchanges = () =>{
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          })
        if(exchangesData){
            return exchangesData.map((exchange,i) =>{
                return (<tr>
                    <td>{i+1}</td>
                    <td><div><img src={exchange.iconUrl} width="20"/> {exchange.name}</div></td>
                    <td>{formatter.format(exchange.volume)}</td>
                    <td>{exchange.numberOfMarkets}</td>
                </tr>)
            })
        }
    }
    return (
        <div className="exchanges">
            <div className="exchanges__header">
            <h1>Top Crypto Exchanges</h1>
            {renderSearch()}
            </div>
            
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Volume</th>
                    <th>Markets</th>
                </tr>
                </thead>
                <tbody>
                    {renderExchanges()}
                </tbody>
                
            </table>
        </div>
    )
}

export default Exchanges
