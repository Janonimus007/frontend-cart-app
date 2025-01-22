import React from 'react'

export const CatalogItem = ({name,description,price}) => {
  return (
    <>
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
    </>
  )
}
