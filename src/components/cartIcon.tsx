import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart">
        <div className='relative w-8 h-8'>
            <Image src="/cart.png" alt='' fill></Image>
        </div>
        <span>Cart (4)</span>
    </Link>
  )
}

export default CartIcon