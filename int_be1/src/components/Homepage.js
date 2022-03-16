import React, {useState} from 'react';
import UserInfo from './UserInfo';
import DisplayCoins from './DisplayCoins';


function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <UserInfo props={count}/>
      <DisplayCoins props={setCount}/>
    </>
  )
}


export default Homepage;