import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
        id:1,
        title: "Toast your breads like a pro",
        image:""
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => prev + 1),
            2000
        );
        return () => clearInterval(interval);
    }, []);




  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>

        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-gray-600 font-bold'>
            <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl '>
                Test 
            </h1>
            <button className='bg-gray-600 text-white py-4 px-8 rounded-2xl'>Order Now</button>
        </div>

        <div className='w-full h-1/2 relative'>
            <Image src="/slide1.jpeg" alt='' fill className='object-cover'></Image>
        </div>
    </div>
  )
}

export default Slider