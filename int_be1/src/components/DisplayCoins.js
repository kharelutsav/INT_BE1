import React from 'react';
import '../css/DisplayCoins.css';
import { Link } from 'react-router-dom';


function DisplayCoins(props) {
  const coins = props.coins

  const CurrencyList = coins.map((coin, index) => {
    return <div className='disp_coins' key={index}>
        <CoinContainer coin={coin}/>
    </div>
  });

  function CoinContainer({coin}){
    const icon = `http://localhost:2057/${coin.coinName.toLowerCase()}.svg`;
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
