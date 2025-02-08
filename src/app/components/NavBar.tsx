import { link } from 'fs'
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 py-6">
           
  <div className="w-full sm:w-auto">
    <ul className="flex justify-between text-stone-600 space-x-4 text-sm sm:text-base">
      
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/">
            Home
          </Link></li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/carts">
            Shop
          </Link></li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/item">
            Item
          </Link></li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/products">
            Product
          </Link></li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/Faq">
            Faq
          </Link></li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors duration-300 ease-in-out"><Link href="/about">
          About
          </Link></li>
    </ul>
  </div>

 
  <div className="mt-2 sm:mt-0 flex text-stone-600 space-x-2 items-center text-sm sm:text-base">
    <h2 className="text-stone-400">Contact:</h2>
    <p>(808) 555-0111</p>
  </div>
</div>

      

  )
}

export default NavBar
