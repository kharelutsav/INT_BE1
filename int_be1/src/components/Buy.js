import React, { useState } from 'react';
import '../css/Buy.css';
import { Navigate, useLocation} from 'react-router-dom';
import connection from './axios-setup';


function Buy({setCoins}) {
  const [amount, setAmount] = useState('');
  const [redirect, setRedirect] = useState(false);
  const coin_name = useLocation().state;
  const buyCoin = () => {
      connection.post('/user/add', {
        'coinName': coin_name,
        'clientId': 1,
        'quantity': amount
      })
      .then(
        setRedirect(true)
      )
      .catch(err => console.log(err));
  }

  if (redirect) {
    return <Navigate replace to="/"/>
  }

  return (
    <div className='buy_cont'>
        <b>Buy {coin_name}</b>
        <div className='amount_cont'>
            <p>Amount</p>
            <input value={amount} onChange={event => setAmount(event.target.value)} autoFocus/>
            <button onClick={buyCoin}>BUY</button>
        </div>
    </div>
  )
};

export default Buy;