import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom'
import getData from '../api';
import { useStateContext } from '../context/StateContext';
import Spinner from '../spinner/Spinner';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState([]);

    const {dispatch} = useStateContext();

    const getDetail = async() => {
        setProduct( await getData(`/products/${id}`))
    }

    const getCategory = async() => {
        const data = await getData(`/products/category/${product.category}`)
        const filterData = data?.filter(item => item.id !== product.id)
        setCategory(filterData)
    }

    useEffect(() => {
        getDetail()
    },[])
    
    useEffect(() => {
        getCategory()
    },[product])

    // console.log(product);
    // console.log(cat);
    
  return (
    <>
        {product && category.length > 0 ? (
            <div className='container my-20'>
        
                <div className='flex gap-7 '>
                    <img src={product?.image} className='px-5 py-5 w-72 h-100 rounded-lg bg-card shadow-lg ' />
                    <div className='flex flex-col gap-5 my-3'>
                        <p className='text-xs text-center font-bold px-2 py-1 bg-pink-200 rounded-lg w-60 shadow-md'> Category - {product?.category}</p>
                        <h1 className='font-bold text-headline text-2xl'>{product?.title}</h1>
                        <div className='flex flex-col mt-3'>
                            <h1 className='font-bold text-headline'>Description</h1>
                            <p className='text-sm text-gray-500 leading-6 tracking-wide'>{product?.description}</p>
                        </div>
                        <div className='flex gap-2 items-center  '>
                            <AiFillStar className='text-button'/>
                            <p className='text-gray-800'>({product?.rating?.rate})</p>
                        </div>
                        <p>
                            <span className='text-button font-bold mr-1'>$</span>
                            <span className='text-gray-800'>{product?.price}</span>
                        </p>
                        <div className='flex gap-3'>
                            <button onClick={() => dispatch({type:"add_to_cart", payload:product}) } className='px-2 py-2 bg-button rounded-md transform transition hover:scale-105  shadow-md'>Add to Cart</button>
                            <Link to={'/success'}>
                                <button className='px-2 py-2 bg-logo text-card rounded-md transform transition hover:scale-105  shadow-md'>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <h1 className='text-2xl text-headline font-semibold tracking-wider cursor-default'>You may also like . . . </h1> 
                    
                    <div className='mt-10 flex flex-wrap gap-10'>
                        {category?.map(item => (
                            <Link to={`/detail/${item?.id}`} key={item?.id}>
                                <div onClick={() => setProduct(item)} >
                                    <img src={item?.image} className='w-52 h-72 mb-5 p-5 bg-card rounded-md shadow-md' />
                                    <p className='p-3 bg-transparent text-center'><span className='text-button font-bold'>$ </span>{item?.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <Spinner/>
        )}
    
    </>
  )
}

export default ProductDetail