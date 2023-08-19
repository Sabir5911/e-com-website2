
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image'; 
import Image from 'next/image';
import Wrapper from '../shared/Wrapper';
import { PRODUCTS } from '../components/sanityfetch';
const productCategory=async (category:string)=>{

  const res:PRODUCTS[]=await client.fetch(`*[_type=='product'&& category->name==$category]`,{
    category:category
  })  
  
return(res) 
}
export default async function page({params}:{params:{category:string}}) {

  const result:PRODUCTS[]= await productCategory(params.category)
  
  return <>
  <Wrapper>

  <div className='flex flex-wrap justify-evenly items-center  gap-x-6'>
{
  result.map((elm,i=0)=>(
    <Link href={{pathname:`/soloproducts/${elm._id}`}} key={i+1}>
<div className="mt-28" >
        <Image src={urlForImage(elm.image).url()} width={300} height={300}alt='Female cateogory' className='rounded-md'/>
        <h3 className="font-bold text-lg mt-3">{elm.name}</h3>
        <span className="text-lg font-semibold text-gray-400">
            {elm.title}
          </span>
        <p className="font-bold text-lg">${elm.price}</p>
      
      </div>
      </Link>
       ))
}
</div>
    </Wrapper>

  </>
}
