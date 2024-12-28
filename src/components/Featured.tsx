import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-gray-600'>
        <div className='w-max flex'>
            <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
                <div className='relative flex-1 w-full'>
                    <Image src="/ddf.jpeg" alt='' fill className='object-contain' ></Image>
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <h1 className='text-xl font-bold uppercase'>Title</h1>
                    <p>Desc</p>
                    <span className='text-xl font-bold'>₹25,000</span>
                    <button className='bg-gray-600 text-white p-2 rounded-md'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured