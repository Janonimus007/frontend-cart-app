import React, { useState } from 'react'
import { CatalogView } from './components/CatalogView'
import { CartView } from './components/CartView'

const initialCartItems = [
    // {
    //     product:{
    //         name:'',
    //         price:0
    //     },
    //     quantity:0,
    //     total:0
    // }
]
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems)
    
  return (
    <>
        <div className='container'>
            <h3>Cart app</h3>            
            <CatalogView/>

            <div  className='my-4 w-50'>
                <CartView items={cartItems}/>
            </div>
        </div>
    </>
  )
}
