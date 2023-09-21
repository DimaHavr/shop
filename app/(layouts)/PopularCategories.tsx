'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const imagesData = [
  {
    id: '1',
    title: 'Жінки',
    href: '/women',
    src: '/images/category/women.webp',
    alt: 'women',
    width: 390,
    height: 390,
  },
  {
    id: '2',
    title: 'Чоловіки',
    href: '/mens',
    src: '/images/category/mens.webp',
    alt: 'mens',
    width: 390,
    height: 390,
  },
  {
    id: '3',
    title: 'Діти',
    href: '/kids',
    src: '/images/category/kids.webp',
    alt: 'kids',
    width: 390,
    height: 390,
  },
  {
    id: '4',
    title: 'Діти',
    href: '/kids',
    src: '/images/category/kids.webp',
    alt: 'kids',
    width: 390,
    height: 390,
  },
  {
    id: '4',
    title: 'Діти',
    href: '/kids',
    src: '/images/category/kids.webp',
    alt: 'kids',
    width: 390,
    height: 390,
  },
  {
    id: '4',
    title: 'Діти',
    href: '/kids',
    src: '/images/category/kids.webp',
    alt: 'kids',
    width: 390,
    height: 390,
  },
  {
    id: '2',
    title: 'Чоловіки',
    href: '/mens',
    src: '/images/category/mens.webp',
    alt: 'mens',
    width: 390,
    height: 390,
  },
]

const PopularCategories = () => {
  return (
    <section className='bg-light-grey py-14'>
      <div className='container flex flex-col items-center justify-center gap-4 text-center'>
        <p className=' max-w-[600px] py-4 text-center font-exo_2 text-2xl font-semibold text-black-dis '>
          Популярні категорії сезону
        </p>
        <Swiper
          grabCursor
          initialSlide={3}
          centeredSlides
          loop
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1560: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination]}
          className='new-arrivals-slider bg-light-grey'
        >
          {imagesData.map(item => {
            return (
              <SwiperSlide key={item.id} style={{ backgroundColor: '#E5E8ED' }}>
                <div className=' my-6 mb-10 flex justify-center '>
                  <Link
                    href={item.href}
                    className='flex h-auto  w-[150px] flex-col items-center justify-center gap-2 rounded-[100%]  transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
                  >
                    <Image
                      className=' h-auto min-w-[200px] rounded-[100%] shadow-box'
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    />
                    <h2 className=' w-full font-exo_2 text-md font-semibold text-black-dis '>
                      {item.title}
                    </h2>
                  </Link>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default PopularCategories
