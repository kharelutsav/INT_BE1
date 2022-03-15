import React from 'react';
import '../css/DisplayCoins.css';
import { Link } from 'react-router-dom';

function CoinContainer({coin}){
  return (
    <>
      <div className='icon'>
        <img src='/bitcoin.svg' alt="" width='42px' height='42px' className='inline'/>
      </div>
      <div className='coin-name'>
        {coin}
      </div>
      <div className='coin-count'>
        5
      </div>
      <div>
        <Link to='/buy'>
          <button className='btn'>Buy</button>
        </Link>
      </div>
    </>
  );
}

const coins = ['Bitcoin', 'Etherum', 'Pi', 'Harmony', 'Terra', 'Tether', 'Dogecoin', 'BNB', 'Fantom', 'Litecoin'];
  const CurrencyList = coins.map((coin, index) => {
    return <div className='disp_coins' key={index}>
      <CoinContainer coin={coin}/>
    </div>
  });
 
function DisplayCoins() {
  return (
    <div className='disp_cont'>
      <div> <b>Cryptocurrencies</b> </div>
      {CurrencyList}
    </div>
  )
}

export default DisplayCoins;
