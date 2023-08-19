import { NextRequest, NextResponse } from "next/server";
// import { db, usercarts } from '../../lib/drizzel'
import { v4 } from "uuid"
import { cookies } from "next/dist/client/components/headers";
// import { eq } from "drizzle-orm";


// export async function GET(request: NextRequest) {

//     try {
//         const res = await db.select().from(usercarts)

//         return NextResponse.json(res)
//     } catch (err) {
//         return new Response("some thing went wrong in ")
//     }
// }

// export async function POST(request:NextRequest) {
//     const idgenerate = v4()

    // const data=request.cookies.set('user_id',idgenerate)

    // const setcookey = cookies()


    // if (!cookies().get('user_id')?.value) {

    //     setcookey.set('user_id', idgenerate)

    // }

    // try {
        // const res = await db.insert(usercarts).values({
        //     price: req.price,
        //     product_name: req.product_name,
        //     quantity: req.quantity,
        //     image: req.image,
        //     size: req.size,
        //     
        //     title: req.title
// const user_id= cookies().get('user_id')?.value as string

// return NextResponse.json({user_id})

        // }
        // .returning()

    


//      catch (err) {
//         return NextResponse.json({ messgae: "error" })
//     }

// }


// export async function DELETE(req: NextRequest) {
//     let url = req.nextUrl.searchParams;


    
//     try {
//         if (url.has("id")) {
//             let response = await db.delete(usercarts).where(eq(usercarts.id, (url.get("id") as unknown as number))).returning()
//             return NextResponse.json({ response });
//         }
//     } catch (error) {
//         console.log("error : ", (error as { message: string }).message)
//         return NextResponse.json({ error })
//     }
// }}




export async function POST() {
    const idgenerate = v4()

    const setcookey = cookies()


    if (!cookies().get('user_id')?.value) {

        setcookey.set('user_id', idgenerate)

    }

    try {
       
const user_id= cookies().get('user_id')?.value as string

return NextResponse.json({user_id})

        }

     catch (err) {
        return NextResponse.json({ messgae: "error" })
    }

}