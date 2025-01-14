"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className='h-calc[(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-gray-600 lg:flex-row'>
      {/* Products */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
      {/* Single Product */}
      <div className='flex items-center justify-between mb-4'>
        <Image src="/lappy.jpeg" alt='' width={100} height={100}></Image>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>laptop</h1>
          <span>Gray</span>
        </div>
        <h2 className='font-bold'>45,000</h2>
        <span className='cursor-pointer'>X</span>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <Image src="/lappy.jpeg" alt='' width={100} height={100}></Image>
        <div className=''>
          <h1 className='uppercase text-xl font-bold'>laptop</h1>
          <span>Gray</span>
        </div>
        <h2 className='font-bold'>45,000</h2>
        <span className='cursor-pointer'>X</span>
      </div>
    </div>

    {/* payment */}
    <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'> 
      <div className=' flex justify-between'>
        <span className=''>Subtotal (2 items)</span>
        <span className=''> 90,000</span>
      </div>

      <div className=' flex justify-between'>
        <span className=''>Service Cost</span>
        <span className=''> ₹0</span>
      </div>

      <div className=' flex justify-between'>
        <span className=''>Delivery Cost</span>
        <span className='text-green-500'> FREE!</span>
      </div>
      <hr />

      <div className=' flex justify-between'>
        <span className=''>TOTAL(INCL. VAT)</span>
        <span className='font-bold'> ₹5,000</span>
      </div>
      <button className='bg-gray-600 text-white p-3 rounded-md w-1/2'>CHECKOUT</button>
    </div>
  </div>
  )
}

export default CartPage