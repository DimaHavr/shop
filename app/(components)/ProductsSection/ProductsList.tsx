'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import Rating from '../Rating'

export interface ProductItem {
  id: number
  attributes: {
    discount?: number
    price: number
    description: string
    img: {
      data: {
        attributes: {
          url: string
          width: number
          height: number
        }
      }[]
    }
    title: string
    page: {
      data: {
        attributes: {
          slug: string
        }
      }
    }
    category: {
      data: {
        attributes: {
          slug: string
        }
      }
    }
    subcategory: {
      data: {
        attributes: {
          slug: string
        }
      }
    }
    isNewProduct: boolean
  }
}

interface ProductsListProps {
  productsData: {
    data: ProductItem[]
  }
}
const ProductsList: React.FC<ProductsListProps> = ({ productsData }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-8'>
      {productsData.data.map(item => {
        let discountPercentage: number = NaN
        if (item.attributes.discount) {
          discountPercentage = item.attributes.discount * 0.01
        }
        const oldPrice =
          item.attributes.price + item.attributes.price * discountPercentage
        const slug = `/${item.attributes.page.data.attributes.slug}/${item.attributes.category.data.attributes.slug}/${item.attributes.subcategory.data.attributes.slug}/${item.id}`
        const imageUrl =
          item.attributes.img?.data[0]?.attributes?.url || 'fallback-url'

        return (
          <li
            className='relative transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
            key={item.id}
          >
            <Link
              className=' flex w-[300px] flex-col items-center justify-center rounded-2xl shadow-box '
              href={slug}
            >
              <Image
                className='h-[300px] min-w-[200px] object-cover'
                src={imageUrl}
                width={item.attributes.img.data[0]?.attributes.width || 250}
                height={item.attributes.img.data[0]?.attributes.height || 300}
                alt='as'
              />
              <div className='flex w-full flex-col justify-start gap-2 rounded-b-2xl bg-white-dis p-2'>
                <h3 className='line-clamp-2 text-left font-exo_2 text-md font-semibold text-black-dis '>
                  {item.attributes.title}
                </h3>
                <p className='flex items-baseline gap-1 font-exo_2 text-lg uppercase'>
                  {item.attributes.discount && (
                    <span className='text-base text-[red] line-through'>
                      {oldPrice.toFixed(2)}
                    </span>
                  )}
                  {item.attributes.price} uah
                </p>
                <div className='absolute right-2 top-2'>
                  <Rating className='flex' size={20} count={5} value={5} />
                </div>

                {item.attributes.discount && (
                  <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-[#c82128] px-[15px] font-exo_2 text-md text-white-dis shadow-button'>
                    {`-${item.attributes.discount}%`}
                  </span>
                )}
                {item.attributes.isNewProduct && (
                  <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-light-blue px-[15px] font-exo_2 text-md uppercase text-white-dis shadow-button'>
                    new
                  </span>
                )}
              </div>
            </Link>
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
          </li>
        )
      })}
    </ul>
  )
}

export default ProductsList
