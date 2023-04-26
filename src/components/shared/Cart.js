import React, { useContext } from 'react'

// Context 
import { CartContext } from '../../context/Reducer.context.provider'

// Functions
import {shorten} from '../../helper/functions'

// Icons
import trashIcon from '../../assets/icons/trash.svg'

export default function Cart(props) {

    const {image , title , price, quantity} = props.data;
    const {dispatch} = useContext(CartContext);
  return (
    <div>
        <img src={image} alt="Product" style={{width : "100px"}}/>
        <div>
            <h3>{shorten(title)}</h3>
            <p>{price} $</p>
        </div>
        <div>
            <span>{quantity}</span>
        </div>
        <div>
            {
                quantity > 1 ?
                    <button onClick={() => dispatch({type : "DECRASE", payload : props.data})}>-</button> :
                    <button onClick={() => dispatch({type : "REMOVE_ITEM", payload : props.data})}><img src={trashIcon} alt='Trash' style={{width : "15px"}}/></button>
            }
            <button onClick={() => dispatch({type : "INCRASE", payload : props.data})}>+</button>
        </div>
    </div>
  )
}
