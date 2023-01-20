import React from 'react'
import { useStateContext } from '../context/StateContext'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  const {dispatch} = useStateContext()
  return (
    <div className=' flex flex-col gap-1 w-68 p-5 rounded-lg shadow-lg bg-card transform transition hover:scale-105' >
        <img src={product?.image} alt="" className='h-[200px] w-40 p-5 mx-auto' />
        <h2 className='font-bold h-[20px] tracking-wider'>{product?.title?.substring(0,15)}...</h2>
        <div className='flex gap-2 items-center'>
            <AiFillStar className='text-button font-bold'/>
            <small className='text-gray-500'>({product?.rating?.rate})</small>
        </div>
        <p>
          <span className='text-button font-bold'>$ </span>
          <span className='text-logo text-sm font-bold'> {product?.price}</span>  
        </p>
        <div className='flex gap-2'>
          
            <button onClick={() => dispatch({type:"add_to_cart", payload:product})} className=' text-sm bg-button px-3 py-1 rounded-lg transform transition hover:shadow-lg hover:scale-105 '>
              Add to Cart
            </button>
          
          <Link to={`/detail/${product.id}`}>
            <button className='text-sm bg-logo text-card px-3 py-1 rounded-lg transform transition hover:shadow-lg hover:scale-105 '>Details</button>
          </Link>
        </div>

    </div>
  )
}

export default Card