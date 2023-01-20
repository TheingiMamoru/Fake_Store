import React from 'react'
import getData from '../api'
import { useStateContext } from '../context/StateContext'
import Card from '../components/Card'
import Spinner from '../spinner/Spinner'

const Products = () => {
    const {state:{products, cart}} = useStateContext()
    console.log(cart);

    
  return (
    <div className='flex flex-wrap gap-7 justify-center my-10  '>
      {
        products.length > 0 ? products?.map((product) => <Card key={product.id} product={product}/> ) : <Spinner/>
        // products?.map((product) => <Card key={product.id} product={product}/> )
      }
    </div>
  )
}

export default Products