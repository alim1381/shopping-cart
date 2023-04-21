import React from 'react'
import { shorten } from '../helper/functions'

export default function Product({productData}) {
  return (
    <div style={{padding: "10px"}}>
        <img src={productData.image} alt="Product" style={{width: "200px" , height: "200px"}} />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <a href="/">Link</a>
            <div>
                <button>add to Cart</button>
            </div>
        </div>
    </div>
  )
}
