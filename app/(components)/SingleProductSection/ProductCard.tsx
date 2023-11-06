'use client'

import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FaRegHeart } from 'react-icons/fa'

import { onAdd } from '@/app/(redux)/cart/cartSlice'
import { useAppDispatch } from '@/app/(redux)/hooks'

import { type ProductItemProps } from './GeneralInfo'

const ProductCard: React.FC<ProductItemProps> = ({
  productItem,
  setActiveTab,
}) => {
  const [color, setColor] = useState<React.Key>('')
  const [size, setSize] = useState<React.Key>('')
  let discountPercentage: number = NaN
  if (productItem.attributes.discount) {
    discountPercentage = productItem.attributes.discount * 0.01
  }
  const oldPrice =
    productItem.attributes.price +
    productItem.attributes.price * discountPercentage
  const reviewQty = productItem.attributes.reviews.data.length
  const totalRating = productItem.attributes.reviews.data.reduce(
    (acc, rating) => acc + rating.attributes.rating,
    0,
  )
  const averageRating = totalRating / reviewQty
  const dispatch = useAppDispatch()
  const handleAddToCart = () => {
    if (!color) {
      toast.error('Оберіть колір...', {
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#333',
        },
      })
      return
    }

    if (!size) {
      toast.error('Оберіть розмір...', {
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#333',
        },
      })
      return
    }

    toast.success(`${productItem.attributes.title} додано до кошика!`, {
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#333',
      },
    })
    dispatch(
      onAdd({
        product: productItem,
        quantity: 1,
        color: color.toString(),
        size: size.toString(),
      }),
    )
    setColor('')
    setSize('')
  }

  return (
    <div className='relative'>
      <div className=' flex w-[360px] flex-col items-center justify-center gap-2 rounded-2xl shadow-box '>
        <Image
          className='h-[300px] w-full object-cover '
          src={
            productItem.attributes.img.data[0]?.attributes.url || 'fallback-url'
          }
          width={productItem.attributes.img.data[0]?.attributes.width}
          height={productItem.attributes.img.data[0]?.attributes.height}
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
              <Autocomplete
                label='Виберіть розмір'
                variant='underlined'
                className='max-w-xs'
                selectedKey={size}
                onSelectionChange={setSize}
              >
                {productItem.attributes.sizes.data.map(item => (
                  <AutocompleteItem key={item.attributes.size}>
                    {item.attributes.size}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
            <div className='flex w-[150px] max-w-xs flex-col gap-2'>
              <Autocomplete
                label='Виберіть колір'
                variant='underlined'
                className='max-w-xs'
                selectedKey={color}
                onSelectionChange={setColor}
              >
                {productItem.attributes.colors.data.map(item => (
                  <AutocompleteItem key={item.attributes.name}>
                    {item.attributes.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            type='button'
            className='my-[10px] w-full rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
          >
            Купити
          </button>
          <div className='absolute right-2 top-2'>
            <button
              type='button'
              onClick={() => setActiveTab('ProductReviews')}
            >
              <Rating
                style={{ maxWidth: 100 }}
                value={averageRating}
                readOnly
              />
            </button>
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
        className='absolute right-4 top-[250px] z-[1] flex items-center justify-center rounded-[50%] bg-white-dis p-3 shadow-box'
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
