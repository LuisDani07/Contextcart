import faker from 'faker';
import SingleProduct from './SingleProduct';
faker.seed(100);
import {useState, useContext} from 'react';
import { Cart } from '../context';

function Home({}) {



  const productsArray=[...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.random.image()
  }))
  const [products]=useState(productsArray);
  console.log(useContext(Cart))

  return (
    <div className='productContainer'>
      {products.map((prod=>(
        <SingleProduct prod={prod} key={prod.id}/>
      )))}
    </div>
  )
}

export default Home