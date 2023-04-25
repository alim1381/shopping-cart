import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// icons
import trashIcon from "../../assets/icons/trash.svg"

// Helper Function
import { shorten , isInCart , quantityCount} from '../../helper/functions'

// Context
import {CartContext} from '../../context/Reducer.context.provider';


export default function Product({productData}) {
  const {state , dispatch} = useContext(CartContext);

  return (
    <div style={{padding: "10px"}}>
        <img src={productData.image} alt="Product" style={{width: "200px" , height: "200px"}} />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <Link to={`/products/${productData.id}`}>Link</Link>
            <div>
                {
                  isInCart(state , productData.id) ? 
                    <button onClick={() => dispatch({type: "INCRASE" , payload : productData})}>+</button> :
                    <button onClick={() => dispatch({type: "ADD_ITEM" , payload : productData})}>add To Cart</button>
                }
                {
                  quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload : productData})}><img src={trashIcon} alt='Trash Icon' style={{width : "15px"}}/></button>
                }
                {
                quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type: "DECRASE" , payload : productData})}>-</button>
                }
            </div>
        </div>
    </div>
  )
}
