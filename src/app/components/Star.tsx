import React from 'react'
interface CartsProps {
  name: string;
  price: number;
  image: string;
}
const Star: React.FC<CartsProps> = ({name, price, image, }) => {
  return (
    <div>
        <div className="group relative max-w-sm mx-auto">
  {/* Product Image */}
  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
      <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">
        Add to Cart
      </button>
    </div>
  </div>

  {/* Product Details */}
  <div className="mt-4 text-center">
    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
    <p className="mt-1 text-sm font-medium text-gray-600">${price}</p>
  </div>
</div>

      
    </div>
  )
}

export default Star
