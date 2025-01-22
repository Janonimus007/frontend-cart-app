import React from 'react'
import { CatalogView } from './components/CatalogView'
import { CartView } from './components/CartView'


export const CartApp = () => {


    
  return (
    <>
        <div className='container'>
            <h3>Cart app</h3>            
            <CatalogView/>

            <div  className='my-4 w-50'>
                <CartView/>
            </div>
        </div>
    </>
  )
}
