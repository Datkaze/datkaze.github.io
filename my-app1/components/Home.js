import React from 'react'
import { getProduct } from '../src/Data'


export const Home = () => {
    const product = getProduct()
  return (
    <div>
        {product.map(product => {
            return(
                <Link to={'/home/${product.id}'}>{product.name}</Link>
            )
        })}
    </div>
  )
}