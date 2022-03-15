import React, { useState } from 'react';
import '../css/Buy.css';
import {Link, useLocation} from 'react-router-dom';
import connection from './axios-setup';


function Buy() {
  const [amount, setAmount] = useState('');
  const coin_name = useLocation().state;
  const buyCoin = () => {
      connection.post('/user/add', {
        'coinName': coin_name,
        'clientId': 1,
        'quantity': amount
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  return (
    <div className='buy_cont'>
        <b>Buy {coin_name}</b>
        <div className='amount_cont'>
            <p>Amount</p>
            <input value={amount} onChange={event => setAmount(event.target.value)} autoFocus/>
            <Link to="/">
              <button onClick={buyCoin}>BUY</button>
            </Link>
        </div>
    </div>
  )
};

export default Buy;