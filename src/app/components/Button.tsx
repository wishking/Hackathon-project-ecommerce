import React from 'react'
import Link from "next/link";


const Button = () => {
  return (
    
    <div className="my-4">
    <Link href="/products">
      <button className="flex px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
        Shop Now <img src="/img/Right1.png" alt="" />
      </button>
    </Link>
  </div>
    
        
      
   
  )
}

export default Button
