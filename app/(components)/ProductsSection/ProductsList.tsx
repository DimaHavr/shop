'use client'

import { Rating } from '@smastrom/react-rating'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'

import getHeaders from '@/app/(utils)/getHeaders'

import Toolbar from './Toolbar'

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
    sizes: {
      data: {
        id: number
        attributes: {
          size: string
        }
      }[]
    }
    colors: {
      data: {
        id: number
        attributes: {
          name: string
        }
      }[]
    }
    reviews: {
      data: {
        id: number
        attributes: {
          comment: string
          rating: number
          name: string
          createdAt: string
        }
      }[]
    }
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
  productsUrl: string
  productsData: {
    data: ProductItem[]
    meta: {
      pagination: {
        total: number
      }
    }
  }
}
const ProductsList: React.FC<ProductsListProps> = ({
  productsData,
  productsUrl,
}) => {
  const listRef = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState({ ...productsData })
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  useEffect(() => {
    async function fetchData() {
      if (!productsUrl) {
        return
      }
      try {
        const url = `${productsUrl}&pagination[page]=${currentPage}`
        const res = await axios.get(
          `https://shop-strapi.onrender.com/api${url}`,
          {
            headers: getHeaders(),
          },
        )
        setProducts(res.data)
      } catch (error) {
        throw new Error('Fetch error')
      }
    }
    fetchData()
  }, [currentPage, productsUrl])
  return (
    <div ref={listRef}>
      {productsData.meta.pagination.total > 8 && (
        <Toolbar
          productsData={productsData}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
      <ul className='container flex flex-wrap items-center justify-center gap-6'>
        {products.data.map(item => {
          let discountPercentage: number = NaN
          if (item.attributes.discount) {
            discountPercentage = item.attributes.discount * 0.01
          }
          const oldPrice =
            item.attributes.price + item.attributes.price * discountPercentage
          const slug = `/${item.attributes.page.data.attributes.slug}/${item.attributes.category.data.attributes.slug}/${item.attributes.subcategory.data.attributes.slug}/${item.id}`
          const imageUrl =
            item.attributes.img?.data[0]?.attributes?.url || 'fallback-url'
          const reviewQty = item.attributes.reviews.data.length
          const totalRating = item.attributes.reviews.data.reduce(
            (acc, rating) => acc + rating.attributes.rating,
            0,
          )
          const averageRating = totalRating / reviewQty
          return (
            <li
              className='relative transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
              key={item.id}
            >
              <Link
                className=' flex w-[290px] flex-col items-center justify-center rounded-2xl shadow-box '
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
                    <Rating
                      style={{ maxWidth: 90 }}
                      value={averageRating}
                      readOnly
                    />
                  </div>

                  {item.attributes.discount && (
                    <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-[#c82128] px-[15px] font-exo_2 text-md text-white-dis shadow-button'>
                      {`-${item.attributes.discount}%`}
                    </span>
                  )}
                  {item.attributes.isNewProduct === true && (
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
      {productsData.meta.pagination.total > 8 && (
        <Toolbar
          productsData={productsData}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  )
}

export default ProductsList
