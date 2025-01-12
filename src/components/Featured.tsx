import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'

const getData = async ()=>{
    const res = await fetch("http://localhost:3000/api/products",{
      cache:"no-store"
    })
  
    if(!res.ok){
      throw new Error("Failed!");
    }
  
    return res.json()
  }

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-gray-600'>
        <div className='w-max flex'>
            {/* single product */}
            {featuredProducts.map((item) => (
                <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>

                 {/* Image */}
                 {item.img && (
                    <div className='relative flex-1 w-full'>
                    <Image src={item.img} alt='' fill className='object-contain' ></Image>
                </div>
                 )}
                
                {/* Text */}
                <div className='flex-1 flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                    <p className='p-4 2xl:p-8'>{item.desc}</p>
                    <span className='text-xl font-bold'>{item.price}</span>
                    <button className='bg-gray-600 text-white p-2 rounded-md'>Add to Cart</button>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Featured