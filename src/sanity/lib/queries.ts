import { defineQuery } from "next-sanity";



export const allProducts = defineQuery(`
  *[_type =="products"]{
  _id,
    title,
    description,
    "image": image.asset->url,
    price,
    inventory
    
}
    
 `)

    export const FourProducts = defineQuery(`
       
    *[_type =="products"][0..3]{
  _id,
    title,
    description,
    "image": image.asset->url,
    price,
    inventory
    
}
`)

export const Categories = defineQuery(`
  *[_type =="categories"]{
  title,
  "image": image.asset->url,
  products[]
    
}
    
 `)

 export const OrderData = defineQuery(`
  *[_type =="order"]{

    firstName,
      lastName,
      phone,
      email,
      address,
      city,
      zipCode
    
}
    
 `)

 