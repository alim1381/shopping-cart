import React, { useContext } from 'react'
import { ProductsContext } from '../context/Products.context.provider'
import { Link, useParams } from 'react-router-dom';


export default function ProductDetails(props) {
    const params = useParams();
    const data = useContext(ProductsContext);
    const product = data[params.id - 1];
    const {title , price , category , image , description} = product;

  return (
    <div>
        <img src={image} alt="Product" style={{width: "200px"}} />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>Category :</span> {category}</p>
            <div>
                <span>{price}</span>
                <Link to='products'>Back</Link>
            </div>
        </div>
    </div>
  )
}
