import React, { useEffect, useState } from 'react'
import { calculateTotal } from '../services/productService'

export const CartView = ({items,handlerDelete}) => {
    const [total, setTotal] = useState(0)
    const onDeleteProduct = (id)=>{
        handlerDelete(id)
    }
    useEffect(() => {
        setTotal(
           calculateTotal(items)
        )
    }, [items])
    
  return (
    <>
        <h3>Carrito de compra</h3>
        <table className='table table-hover table-striped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item=>(
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity  * item.product.price}</td>
                            <td><button 
                                className='btn btn-danger'
                                onClick={()=>onDeleteProduct(item.product.id)}>Eliminar</button></td>
                        </tr>                        
                    ))
                }

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className='text-right font-weight-bold'>TOTAL</td>
                    <td colSpan={2} className='text-left font-weight-bold'>{total}</td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}
