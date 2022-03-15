import React from 'react';
import '../css/Buy.css';
import {Link, useLocation} from 'react-router-dom';

function Buy() {
  const redirect = () => <Link to='/'/>
  const coin_name = useLocation().state;
  return (
    <div className='buy_cont' onBlur={redirect}>
        <b>Buy {coin_name}</b>
        <div className='amount_cont'>
            <p>Amount</p>
            <input autoFocus></input>
            <Link to="/">
              <button>BUY</button>
            </Link>
        </div>
    </div>
  )
};

export default Buy;