import React , {useContext} from 'react'
import {ProductsContext} from '../context/Products.context.provider';
import Product from './shared/Product';

export default function Store() {
  
    const products = useContext(ProductsContext);
    return (
    <div style={{display: "flex" , flexWrap: "wrap" , justifyContent: "space-around"}}>
        {
            products.map(product => <Product key={product.id} productData={product} />)
        }
    </div>
  )
}
