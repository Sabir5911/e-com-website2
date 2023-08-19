import { GEtSanitydata, Product } from '@/app/components/sanityfetch'
import React from 'react'
// import { v4 } from "uuid"
import { PRoductcard } from '@/app/components/PRoductcard'
import { cookies } from 'next/dist/client/components/headers'
export default async function page({params}:{params:{_id:string}}) {
  const res =await GEtSanitydata()
  
  const dataFilter=res.filter((elm)=>elm._id===params._id)
  
  // const idgenerate = v4()
  // const setcookey = cookies()


  // // if (!cookies().get('user_id')?.value) {

  //     setcookey.set('user_id', idgenerate)

  // // }
  const user_id=cookies().get('user_id')?.value as string


  return (
    <div>
<PRoductcard  data={dataFilter} user_id={user_id} />
    </div>
  )
}
