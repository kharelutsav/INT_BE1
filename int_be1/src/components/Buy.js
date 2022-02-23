import React from 'react';
import '../css/Buy.css';
import {Link} from 'react-router-dom';

function Buy({coin}) {
  const redirect = () => <Link to='/'/>
  return (
    <div className='buy_cont' onBlur={redirect}>
        <b>Buy {coin}</b>
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