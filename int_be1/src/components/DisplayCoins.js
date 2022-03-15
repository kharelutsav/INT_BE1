import React, { useState, useEffect } from 'react';
import '../css/DisplayCoins.css';
import { Link } from 'react-router-dom';
import connection from './axios-setup';


function DisplayCoins() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    connection.get("/user/1/cryptocoins")
    .then(response => {
        setCoins(response.data)
    }).catch(err => console.log(err));
  }, []);

  const CurrencyList = coins.map((coin, index) => {
    return <div className='disp_coins' key={index}>
        <CoinContainer coin={coin}/>
    </div>
  });

  function CoinContainer({coin}){
    const icon = `/${coin.coinName.toLowerCase()}.svg`;
    return (
      <>
        <div className='icon'>
          <img src={icon} alt="" width='39px' height='39px' className='inline'/>
        </div>
        <div className='coin-name'>
          {coin.coinName}
        </div>
        <div className='coin-count'>
          {coin.Quantity ? coin.Quantity : 0}
        </div>
        <div>
          <Link to={'/buy'} state={coin.coinName}>
            <button className='btn'>Buy</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className='disp_cont'>
      <div> <b>Cryptocurrencies</b> </div>
      {CurrencyList}
    </div>
  )
}


export default DisplayCoins;
