"use client"




import { allProducts } from "@/sanity/lib/queries";
import { sanityFatch } from "@/sanity/lib/fatch";
import Star from "../components/Star";
import { title } from "process";
import Link from "next/link";


export type Products = {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  inventory:number
};



export default async function Home() {
  const products: Products[] = await sanityFatch({query:allProducts });
  console.log(products);
  
  
  return (
  
     <>
        <div className="mx-auto">
     

         <div className="mx-auto max-w-[1321px] my-9 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold mb-8">All Products</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {products.map((product) => (
  <div key={product._id}>
        <div className="group relative max-w-sm mx-auto">
  {/* Product Image */}
  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
    <img
      src={product.image}
      alt={product.title}
      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
    <Link href={`/productDetail/${product._id}`}>
      <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">
        View Detail
      </button>
      </Link>
   
    </div>
  </div>

  {/* Product Details */}
  <div className="mt-4 text-center">
    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
    <p className="mt-1 text-sm font-medium text-gray-600">${product.price}</p>
  </div>
</div>

      
    </div>
))}
  </div>
</div>





<div className="container mx-auto px-4 py-12 space-y-16">
  
  {/* Newsletter Section */}
  <section className="max-w-2xl mx-auto text-center space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
      Or Subscribe To The Newsletter
    </h2>
    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Email Address..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 uppercase"
      >
        Submit
      </button>
    </form>
  </section>

  {/* Instagram Section */}
  <section className="space-y-8">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
      Follow Products And Discounts On Instagram
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item2.png" alt="item1" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item3.png" alt="item2" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item4.png" alt="item3" />
      <img className="m-3 w-full h-full object-cover rounded-md" src="/img/item5.png" alt="item4" />
    </div>
  </section>
</div>




 
  
  
  </div>
      

</>

  )}
 