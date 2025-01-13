"use client"
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import React, {useEffect} from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src="/cart.png" alt='' fill></Image>
        </div>
        <span>Cart (4)</span>
    </Link>
  )
}

export default CartIcon