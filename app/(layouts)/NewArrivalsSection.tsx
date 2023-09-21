'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
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

const NewArrivalsSection = () => {
  return (
    <section className='py-14'>
      <div className='container flex flex-col items-center justify-center gap-4 text-center'>
        <p className=' max-w-[600px] py-4 text-center font-exo_2 text-2xl font-semibold text-black-dis '>
          Ознайомтеся з нашими останніми надходженнями на майбутній сезон
        </p>
        <Swiper
          effect='coverflow'
          grabCursor
          initialSlide={3}
          centeredSlides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1560: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, EffectCoverflow, Pagination]}
          className='new-arrivals-slider'
        >
          {imagesData.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <div className=' my-6 mb-10 flex justify-center'>
                  <Link
                    href={item.href}
                    className='flex  flex-col items-center justify-center rounded-2xl shadow-box transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
                  >
                    <Image
                      className='h-auto min-w-[300px]'
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    />
                    <div className='flex w-full flex-col justify-start gap-2 rounded-b-2xl bg-white-dis p-2'>
                      <h2 className=' text-left font-exo_2 text-md font-semibold text-black-dis '>
                        {item.title}
                      </h2>
                      <p className='text-left'>100 грн</p>
                    </div>
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

export default NewArrivalsSection
