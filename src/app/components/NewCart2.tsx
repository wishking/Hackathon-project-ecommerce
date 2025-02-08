import React from 'react'
interface CartsProps {
  title: string;
  product: string;
}
const NewCart2: React.FC<CartsProps>  = ({title, product}) => {
  
  return (
    
      
    
   

    <div className="mx-auto max-w-[1321px] px-4 lg:px-[80px] my-9">
    <h1 className="text-4xl font-bold mb-8">Top Categories</h1>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="relative w-full max-w-[424px] h-[424px] mx-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img
              className="w-full h-full object-cover"
              src="/img/product3.png"
              alt=""
            />
  
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
              <h1 className="text-xl font-bold text-white">Wing Chair</h1>
              <p className="text-white">3,563 products</p>
            </div>
          </div>
        ))}
    </div>
  </div>
  
    
    



    
    
  )
}

export default NewCart2
