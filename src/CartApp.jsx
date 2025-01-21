import React, { useEffect, useState } from 'react'
import { getProduct } from './services/productService'

export const CartApp = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      
        setProducts(getProduct());
      
    }, [])
    
  return (
    <>
        <div className='container'>
            <h3>Cart app</h3>            
            <div className='row'>
                {
                    products.map(({id,name,description,price} )=>(
                        <div key={id} className='col-4 my-3'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        {name}
                                    </h5>
                                    <p className='card-text'>
                                        {description}
                                    </p>
                                    <p>${price}</p>
                                    <button className='btn btn-primary'>Agregar</button>

                                </div>
                            </div>
                        </div>                        
                    ))
                }

            </div>
            <div  className='my-4 w-50'>
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
                        <tr>
                            <td>Nombre</td>
                            <td>precio</td>
                            <td>Cantidad</td>
                            <td>Total</td>
                            <td>Eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className='text-right font-weight-bold'>sdffd</td>
                            <td colSpan={2} className='text-left font-weight-bold'>sdffsd</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
  )
}
