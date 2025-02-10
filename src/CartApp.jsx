import React, { useEffect, useReducer, useState } from 'react'
import { CatalogView } from './components/CatalogView'
import { CartView } from './components/CartView'
import { itemsReducer } from './reducer/itemsReducer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'

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
        <NavBar/>
        <div className='container'>
            <h3>Cart app</h3>    
            <Routes>
                <Route
                    path='catalog'
                    element={<CatalogView handlerAddProductCart={handlerAddProductCart}/>}
                />

                <Route
                    path='cart'
                    element={
                        cartItems.length>0 ?(
                            <div  className='my-4 w-50'>
                                <CartView 
                                handlerDelete={handlerDeleteProductCart} items={cartItems}/>
                            </div>                
                        ):
                        (
                            <div className='alert alert-warning'>
                                No hay productos en el carrito de compras
                            </div>
                        )
                    }
                />
                <Route
                    path='/'
                    element={<Navigate to={'/catalog'}/>}
                />
            </Routes>        

        </div>
    </>
  )
}
