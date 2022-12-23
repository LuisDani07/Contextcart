import React from 'react'
import { useState } from 'react'
import { createContext } from 'react';
export const Cart=createContext();

function context({children}) {
    const [cart, setCart]=useState([]);
  return (
    <Cart.Provider value={{cart,setCart}}>{children} </Cart.Provider>
  )
}

export default context