import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SanPham = () => {

    const [isLoading, setLoading] = useState(false)
    const [isProduct, setProduct] = useState("")

    useState(()=>{
        setLoading(true)
        try {
            axios.get('http://localhost:3000/products').then(res=>setProduct(res.data))
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    })
    console.log(isProduct);

    if(isLoading) return <p>Loading...</p>

  return (
    <div className='container-product'>
       
    </div>
  )
}

export default SanPham