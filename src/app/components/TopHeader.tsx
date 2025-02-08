import React from 'react'

const TopHeader = () => {
  return (
    
    <div className="bg-slate-900 text-white px-4 py-2">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center space-y-2 sm:space-y-0">
  
      <div className="flex items-center">
        <img className="w-5 h-5 m-2" src="/img/icon2.png" alt="Shipping Icon" />
        <p className="text-sm">Free shipping on all orders over $50</p>
      </div>
  
     
      <div className="hidden sm:flex items-center space-x-4">
      
        <div className="flex items-center">
          <p className="text-sm">Eng</p>
          <img className="w-3 h-2 ml-1" src="/img/icon1.png" alt="Language Icon" />
        </div>
  
      
        <div className="text-sm">
          <p>Faq</p>
        </div>
  
       
        <div className="flex items-center">
          <img className="w-4 h-4 m-2" src="/img/icon3.png" alt="Help Icon" />
          <p className="text-sm">Need Help</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default TopHeader
