import React from 'react'
import { useStateContext } from '../context/StateContext'
import {BsHandThumbsUp} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import CartItem from '../components/CartItem'

const Cart = () => {
    const {state:{cart}, dispatch} = useStateContext();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cart.reduce((pre, cur) => pre + cur.price ,0))
    },[])

    const increaseTotal = (price) => {
        setTotal(total + price)
    }
    const decreaseTotal = (price) => {
        setTotal(total - price)
    }

    const checkOut = () => {
        navigate('/success')
        dispatch({type:"empty_cart"})

    }

  return (
    <>
        {cart.length > 0 ? (
            <div className='grid grid-cols-10 '>
                <div className='mt-10 col-span-7 divide-y-2 pr-10 '>
                    {cart?.map(item => (
                        <CartItem key={item.id} item={item} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} total={total} setTotal={setTotal}/>
                    ))}
                </div>
                <div className='col-span-3'>
                    <div className='flex flex-col bg-logo mt-10 p-10 rounded-lg shadow-lg gap-7'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-cover text-2xl font-bold'>Total Price</h1>
                            <span className='text-2xl font-bold text-cover'>-</span>
                            <span className='text-2xl font-bold text-cover'>${total.toFixed(2)}</span>
                        </div>
                        <div className='flex flex-col gap-3 justify-center'>
                            <button onClick={checkOut} className='px-2 py-1 bg-button text-logo font-bold rounded-md'>Checkout</button>
                            <button onClick={() => dispatch({type:"empty_cart"})} className='px-2 py-1 bg-red-600 text-cover rounded-md'>Empty Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='flex justify-center items-center '>
                <div className=' flex flex-col gap-3 my-20 items-center bg-pink-200 px-20 py-14 rounded animate__animated animate__fadeInUp '>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-semibold text-logo tracking-wider'>Your cart is empty now. </h1>
                    <span className='text-2xl font-semibold text-red-400'> <BsHandThumbsUp/></span>
                </div>
                    <button onClick={() => navigate('/')} className='px-3 py-2 w-34 bg-button rounded-md transform hover:scale-105 '>Continue Shopping</button>
                </div>
            </div>
        )}
        
    </>
  )
}

export default Cart