import { useEffect, useState, useContext } from 'react';
import SingleProduct from './SingleProduct'
import {Cart} from '../context';

function CartPage({}) {
  const [total, setTotal]=useState();
  const {cart}=useContext(Cart);

useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price), 0))
},[cart]);
  
  return (
    <div>
      <span style={{fontsize:30}}>MY CART</span>
      <br />
      <span style={{fontsize:30}}>Total: Rs{total}</span>
      <div className='productContainer'>  {
        cart.map(prod=>(
          <SingleProduct prod={prod} key={prod.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default CartPage