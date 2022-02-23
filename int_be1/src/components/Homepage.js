import React, { useState } from 'react'
import UserInfo from './UserInfo';
import DisplayCoins from './DisplayCoins';

function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <>
        <UserInfo count={count}/>
        <DisplayCoins/>
    </>
  )
}

export default Homepage;