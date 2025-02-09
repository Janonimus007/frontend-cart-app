import React, { useEffect, useReducer, useState } from 'react'
import { CatalogView } from './components/CatalogView'
import { CartView } from './components/CartView'
import { itemsReducer } from './reducer/itemsReducer'

const initialCartItems = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')):
[]
export const CartApp = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)
    useEffect(() => {
        sessionStorage.setItem('cart',JSON.stringify(cartItems))
    }, [cartItems])
    
    const handlerAddProductCart =(product) =>{

        const hasItem = cartItems.find(productCart => product.id ==productCart.product.id)
        console.log(hasItem);
        if(hasItem){
            console.log('entro al if',product.id);
            dispatch(
                {
                    type:'UpdateQuantityProductCart',
                    payload:{product
                    ,hasItem}
                }
            )
        }else{
            dispatch({
                type:'AddProductCart',
                payload:product
            })          
        }
    }

    const handlerDeleteProductCart = (id)=>{
        dispatch({
            type:'DeleteProductCart',
            payload:id
        })  
    }
    
  return (
    <>
        <div className='container'>
            <h3>Cart app</h3>            
            <CatalogView handlerAddProductCart={handlerAddProductCart}/>
            {cartItems.length>0 &&(
                <div  className='my-4 w-50'>
                    <CartView 
                    handlerDelete={handlerDeleteProductCart} items={cartItems}/>
                </div>                
            )}

        </div>
    </>
  )
}
