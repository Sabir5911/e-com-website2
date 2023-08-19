import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image'; 
import { Image as IIMAGE } from 'sanity';

export interface PRODUCTS{
    _id:string
  image:IIMAGE,
  price:number,
  name:string
  category:{
name:string
  }
  title:string
} 


export interface Product{
  user_id:string
    _id:string
  image:IIMAGE,
  price:number,
  name:string
  category:{
name:string
  }
  title:string
quantity:number
size:string
} 



export const GEtSanitydata=async ()=>{

  const res:PRODUCTS[]=await client.fetch(`*[_type=='product'] {
   
    _id,
    image,
    price,
    name,
    category->{
        name,
    },
    title,

    slug{
      current,
    } , 
   }
    `
    ,{
        caches:"no-store"
    })  
 

return res 

}