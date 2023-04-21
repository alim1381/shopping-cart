import React, { createContext, useEffect, useState } from 'react'

import { getProducts } from '../services/ApiService';

export const ProductsContext = createContext();

export default function ProductsContextProvider(props) {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setProducts(await getProducts('/products'))
        }
        fetchApi();
    } , [])
  return (
    <ProductsContext.Provider value={products}>
        {props.children}
    </ProductsContext.Provider>
  )
}
