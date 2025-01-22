import React, { useEffect, useState } from 'react'
import { getProduct } from '../services/productService';
import { CatalogItem } from './CatalogItem';

export const CatalogView = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        setProducts(getProduct());
      
    }, [])
  return (
    <>
        <div className='row'>
            {
                products.map(({id,name,description,price} )=>(
                    <div key={id} className='col-4 my-3'>
                        <CatalogItem name={name} description={description} price={price}/>
                    </div>                        
                ))
            }
        </div>    
    </>
  )
}
