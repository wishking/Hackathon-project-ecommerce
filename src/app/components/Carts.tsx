import React from 'react';

interface CartsProps {
  product: string;
  heading: string;
}

const Carts: React.FC<CartsProps> = ({ product, heading }) => {
  return (
    <div className="mx-auto max-w-[1321px] my-9">
      <h1 className="text-4xl font-bold mb-8">{heading}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
              <div className="relative bg-slate-100 w-full h-64 rounded-sm">
                <div className="flex justify-between p-2">
                  <div className="w-14 h-8 rounded bg-green-500 px-3 py-1 text-white">
                    Now
                  </div>
                </div>
                <img
                  className="absolute top-10 left-1/2 transform -translate-x-1/2 w-52 h-48"
                  src={product}
                  alt="Product"
                />
              </div>

              <div className="flex justify-between items-center mt-4 px-2">
                <div>
                  <h4 className="text-blue-600 font-semibold text-sm">
                    HAVIT HV-G92 Gamepad
                  </h4>
                  <p className="text-stone-500 mt-2">$120</p>
                </div>
                <img
                  className="w-10 h-auto"
                  src="/img/addCarts.png"
                  alt="Add to Cart"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carts;
