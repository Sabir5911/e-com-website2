
import { cookies } from "next/dist/client/components/headers";

import GETDATA from "./GetData";
  export default   async function page() {



const user_id=cookies().get('user_id')?.value as string
  return (
    <>

<GETDATA user_id={user_id}/>
   
    </>
  );
}
