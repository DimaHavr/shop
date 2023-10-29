'use client'

import type { Selection } from '@nextui-org/react'
import { Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'

import Rating from '../Rating'
import { animals, type ProductItemProps } from './GeneralInfo'

const ProductCard: React.FC<ProductItemProps> = ({ productItem }) => {
  const [value, setValue] = useState<Selection>(new Set([]))
  let discountPercentage: number = NaN
  if (productItem.attributes.discount) {
    discountPercentage = productItem.attributes.discount * 0.01
  }
  const oldPrice =
    productItem.attributes.price +
    productItem.attributes.price * discountPercentage

  return (
    <div className='relative'>
      <div className=' flex flex-col items-center justify-center gap-2 rounded-2xl shadow-box '>
        <Image
          className='h-[300px] w-full object-cover '
          src={productItem.attributes.img.data[0].attributes.url}
          width={productItem.attributes.img.data[0].attributes.width}
          height={productItem.attributes.img.data[0].attributes.height}
          alt='as'
        />
        <div className='flex w-full flex-col justify-start gap-2 rounded-b-2xl bg-white-dis p-2'>
          <h3 className='line-clamp-2 text-left font-exo_2 text-md font-semibold text-black-dis '>
            {productItem.attributes.title}
          </h3>
          <p className='flex items-baseline gap-1 font-exo_2 text-lg uppercase'>
            {productItem.attributes.discount && (
              <span className='text-base text-[red] line-through'>
                {oldPrice.toFixed(2)}
              </span>
            )}
            {productItem.attributes.price} uah
          </p>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex w-[150px] max-w-xs flex-col gap-2'>
              <Select
                label='Виберіть розмір'
                variant='bordered'
                selectedKeys={value}
                className='max-w-xs'
                onSelectionChange={setValue}
              >
                {animals.map(animal => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className='flex w-[150px] max-w-xs flex-col gap-2'>
              <Select
                label='Виберіть колір'
                variant='bordered'
                selectedKeys={value}
                className='max-w-xs'
                onSelectionChange={setValue}
              >
                {animals.map(animal => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <button
            type='button'
            className='my-[10px] w-full rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
          >
            Купити
          </button>
          <div className='absolute right-2 top-2'>
            <Rating className='flex' size={25} count={5} value={4} />
          </div>

          {productItem.attributes.discount && (
            <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-[#c82128] px-[15px] font-exo_2 text-md text-white-dis shadow-button'>
              {`-${productItem.attributes.discount}%`}
            </span>
          )}
          {productItem.attributes.isNewProduct && (
            <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-light-blue px-[15px] font-exo_2 text-md uppercase text-white-dis shadow-button'>
              new
            </span>
          )}
        </div>
      </div>
      <button
        className='absolute right-4 top-[280px] z-[1] flex items-center justify-center rounded-[50%] bg-white-dis p-3 shadow-box'
        type='button'
      >
        {/* <FaHeart
                    color='#17696A'
                    className='transition-all  duration-300 hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80'
                    size={30}
                  /> */}
        <FaRegHeart
          color='#17696A'
          className='transition-all  duration-300 hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80'
          size={30}
        />
      </button>
    </div>
  )
}

export default ProductCard
