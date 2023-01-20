import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs'

const Success = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center '>
        <div className=' flex flex-col gap-3 my-20 items-center bg-pink-200 px-20 py-14 rounded animate__animated animate__fadeInUp '>
          <div className='flex items-center'>
            <h1 className='text-2xl font-semibold text-logo tracking-wider'>Thanks for Purchasing! </h1>
            <span className='text-2xl font-semibold text-red-400'> <BsFillEmojiHeartEyesFill/></span>
          </div>
            <button onClick={() => navigate('/')} className='px-3 py-2 w-34 bg-button rounded-md transform hover:scale-105 '>Continue Shopping</button>
        </div>
    </div>
  )
}

export default Success