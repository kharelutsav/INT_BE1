import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import DisplayCoins from './DisplayCoins';
import connection from './axios-setup';


function Homepage() {
  const [count, setCount] = useState(0);
  const [coins, setCoins] = useState([]);


  useEffect(() => {
    connection.get("/user/1/cryptocoins")
    .then(response => {
      setCount(response.data.count);
      setCoins(response.data.coins);
    }).catch(err => console.log(err));
  }, []);


  return (
    <>
      <UserInfo count={count}/>
      <DisplayCoins coins={coins}/>
    </>
  )
}


export default Homepage;