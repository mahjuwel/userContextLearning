import React, {useContext} from 'react';
import {UserContext} from './userContext';
// const [user] = userContext(); 
function Component3() {
    const {user, text} = useContext(UserContext);
    console.log(user);
  return (
    <div>
        <p>{text}</p>
        <p>{user.name}</p>
        <p>{user.id}</p>
    </div>
  )
}

export default Component3