import React from 'react'

export const CartView = () => {
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
    </>
  )
}
