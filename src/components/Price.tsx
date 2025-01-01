"use client"

import React, { useState, useEffect } from 'react'

type Props = {
  price: number,
  id: number,
  options?: { title:string; additionalPrice:number}[];
}

const Price = ({price,id,options}: Props) =>{
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return(
    <div>
      <h2>${total.toFixed(2)}</h2>
      <div>
        {options?.map((option, index) =>(
          <button key={option.title} className='' style={{
            background: selected===index ? "rgb(92,92,92)" : "white",
            color : selected===index ? "white": "gray",
          }}
          onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-gray-600'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1: 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1: 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className='uppercase w-56 bg-gray-600 text-white p-3 ring-1 ring-gray-600'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}



export default Price