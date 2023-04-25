import React, { useContext } from 'react'

// Icons
import shopIcon from '../../assets/icons/shop.svg'

import { CartContext } from '../../context/Reducer.context.provider'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const {state} = useContext(CartContext);

  return (
    <div>
        <div>
            <Link to='/product'>Product</Link>
        </div>
        <div>
            <Link to='/cart'><img src={shopIcon} alt="Shop Icon" style={{width : "15px"}} /></Link>
            <span>{state.itemCounter}</span>
        </div>
    </div>
  )
}
