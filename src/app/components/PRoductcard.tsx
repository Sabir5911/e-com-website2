"use client";
import { urlForImage } from "../../../sanity/lib/image";
import {  useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCTS, Product } from "./sanityfetch";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";

export const PRoductcard = ({ data,user_id }: { data :PRODUCTS[] ,user_id:string}) => {


  const notify = () => toast.success(`Successfully Added!  `, {
    position: "top-center",
    autoClose: 2000,
    theme: "light",
      });


  const [Quantity, setQuantity] = useState(1);

  const [Size, setSize] = useState("L");
  

  /////////////
  const colorHAndle = (Selected_Size: string) =>
    Size == Selected_Size ? "bg-black text-white" : "bg-slate-300 text-white ";

  const handleSize = (size: string) => {
    setSize(size);
  };

  const increment = () => {
    setQuantity(Quantity + 1);
  };
  const decrement = () => {
    setQuantity(Quantity - 1);

    if (Quantity <= 1) {
      setQuantity(1);
     
    }
  };
  
 

  const dispatch = useDispatch();
  const addproducthandle = (data12:any) => {
    
    dispatch(cartActions.addProduct({product:data12,quantity:Quantity}));
  };


  const handlepost = async () => {

   fetch("/api/cart", {
      method: "POST",
     
      
    });
   

  };  

  return (
    <>
      <div>
        {data.map((elm:any,i=0) => (
          <div className="mt-12 flex gap-x-11 justify-center flex-wrap " key={i}>
            <div className="w-72 lg:w-[500px]">
              <Image
                src={urlForImage(elm.image).url()}
                alt="sa"
                width={500}
                height={500}
              />
            </div>

            <div>
              <div className="mt-28">
                <h1 className="text-2xl lg:text-4xl">{elm.name}</h1>
                <text className="text-2xl text-[#C6C6C6] font-medium">
                  {elm.title}
                </text>
              </div>

              <div className="mt-16">
                <text className="text-xl font-bold">SELECT SIZE</text>
                <div className="flex gap-x-6 text-2xl mt-5 font-semibold text-[#666] lg:gap-x-10">
                  {["XS", "S", "M", "L", "XL"].map((elm,i=0) => (
                    <div key={i+1}
                      onClick={() => handleSize(elm)}
                      className={`w-10 h-10 flex justify-center items-center rounded-full cursor-pointer ${colorHAndle(
                        elm
                      )}`}
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
              {/* //////////////////// */}

              <div className="flex gap-x-10 justify-center items-center mt-16  flex-col float-left ">
                <div className="flex items-center gap-x-2 text-2xl">
                <h1 className="text-xl font-bold ">QUANTITY :</h1>

                  {/* Minus */}
                  <button
                    onClick={decrement}
                    className="w-8 h-8 border rounded-full center "
                  >
                    -
                  </button>
                  {/* Number */}
                  <span className="text-sm">{Quantity}</span>
                  {/* Plus */}
                  <button
                    onClick={increment}
                    className="w-8 h-8 border rounded-full center text-2xl"
                  >
                    +
                  </button>
                </div>
                <div className="mt-14 flex gap-x-10  float-left lg:float-none" onClick={notify}>
                  <ToastContainer
                position="top-center"
                autoClose={5000}
              
                theme="light"
                style={{ width: "250px",}}                
                />

              
                <button
                  onClick={()=>{handlepost(),addproducthandle({

                    user_id:user_id,
                    size:Size,
                    quantity:Quantity,
                    name:data[0].name,
                    title:data[0].title,
                    category:data[0].category.name,
                    _id:data[0]._id,
                    image:data[0].image,
                    price:data[0].price
                  

                  })}}
                  className="bg-blue-100 text-[#0000ff] px-4 py-3 rounded-md hover:shadow-xl font-semibold  text-base  "
                >
                  ADD TO CART
                </button>
                <text className="text-3xl font-bold self-center">{elm.price}$</text>
              </div>
              </div>
             
            </div>
          </div>
        ))}
        {/* ////////////// */}
      </div>
    </>
  );
};
