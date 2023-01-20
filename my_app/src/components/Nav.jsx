import React from 'react'
import {SiShopify} from 'react-icons/si'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Nav = () => {
    const {search, setSearch, state:{cart}} = useStateContext();
    // console.log(search);

  return (
    <div>
        <nav className='my-3 px-3 py-1 flex justify-between items-center'>
            <Link to={'/'}>
                <div className='flex gap-2 items-center' >
                    <SiShopify className='text-3xl text-logo' />
                    <h1 className='text-logo text-xl font-bold uppercase tracking-wider'>Fake Store</h1>
                </div>
            </Link>
            <div className='flex gap-2 items-center'>
                <Link to={'/cart'}>
                    <div className='flex gap-2 items-center py-1 px-2 bg-logo text-card rounded-md cursor-pointer'>
                        <FaShoppingCart/>
                        <small>{cart.length}</small>
                    </div>
                </Link>
                <div className='flex gap-2 items-center px-2 border-2 rounded-md border-headline'>
                    <BiSearchAlt2 className='text-xl text-headline'/>
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='search...' className='outline-none bg-transparent text-headline'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav