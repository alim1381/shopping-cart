import React from 'react'

// Helper Function
import { shorten } from '../../helper/functions'
import { Link } from 'react-router-dom'

export default function Product({productData}) {
  return (
    <div style={{padding: "10px"}}>
        <img src={productData.image} alt="Product" style={{width: "200px" , height: "200px"}} />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <Link to={`/products/${productData.id}`}>Link</Link>
            <div>
                <button>add to Cart</button>
            </div>
        </div>
    </div>
  )
}
