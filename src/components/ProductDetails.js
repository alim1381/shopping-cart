import React, { useContext } from 'react'
import { ProductsContext } from '../context/Products.context.provider'
import { Link, useParams } from 'react-router-dom';


export default function ProductDetails() {
    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];
    

  return (
    <div>
        <img src={product && product.image} alt="Product" style={{width: "200px"}} />
        <div>
            <h3>{product && product.title}</h3>
            <p>{product && product.description}</p>
            <p><span>Category :</span> {product && product.category}</p>
            <div>
                <span>{product && product.price}</span>
                <Link to='products'>Back</Link>
            </div>
        </div>
    </div>
  )
}
