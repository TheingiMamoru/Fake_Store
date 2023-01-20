import React from 'react'
import { useState } from 'react'
import { useStateContext } from '../context/StateContext'
import {FaTrash} from 'react-icons/fa'


const CartItem = ({item, increaseTotal, decreaseTotal, total, setTotal}) => {
    const {dispatch} = useStateContext()
    const [qty, setQty] = useState(1);

    const qtyIncrease = () => {
        setQty(pre => pre + 1);
        increaseTotal(item.price)
    }

    const qtyDecrease = () =>{
        if(qty > 1){
            setQty(pre => pre -1)
            decreaseTotal(item.price)
        }
    }

    const removeItem = () => {
        dispatch({type:"remove_from_cart", payload:item})
        decreaseTotal(item.price * qty)
        // setTotal( total - (item.price * qty))
        
    }
  return (
    
    <div className='flex gap-5 py-5'>
        <img src={item?.image} className='h-32 p-5 bg-card rounded-lg shadow-md' />
        <div className='flex flex-col gap-1 mt-5'>
            <h1 className='font-bold'>{item?.title}</h1>
            <p><span className='text-headline font-bold'> $ </span>{item?.price * qty}</p>
            <div className='flex gap-3 items-center'>
                <button onClick={qtyDecrease}  className='px-1 bg-button rounded-lg transform hover:scale-105'>-</button>
                <p>{qty}</p>
                <button onClick={qtyIncrease}  className='px-1 bg-button rounded-lg transform hover:scale-105'>+</button>
            </div>
            <button onClick={removeItem}>
                <FaTrash className='text-red-500'/>
            </button>
        </div>
    </div> 
    
  )
}

export default CartItem