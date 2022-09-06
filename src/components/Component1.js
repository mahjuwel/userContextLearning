import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './userContext';

function Component1() {
  const [user, setUser]= useState({id: 100, name: "alhasan"});
  const [text, setText]= useState('I am learning UseContext hook');
  return (
    <UserContext.Provider value={{user,text}}>
     <Component2/>
    </UserContext.Provider>
  )
}

export default Component1