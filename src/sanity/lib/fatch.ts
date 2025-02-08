import { createClient } from "next-sanity";



const client = createClient({

    projectId:"yeh86jag",
    dataset: "production",
    useCdn:true,
    apiVersion:"2023-10-10"
   
})


export async function sanityFatch ({query, params  ={}}: {query:string, params?:any}){
    return await client.fetch(query, params)

}