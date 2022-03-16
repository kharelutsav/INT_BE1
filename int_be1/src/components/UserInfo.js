import React from 'react';
import '../css/UserInfo.css';

function UserInfo(props) {
  const count = props.count;
  return (
    <div className='title'>
        Number of unique crypto you own
        <br/>
        {count}
    </div>
  )
}


export default UserInfo;