'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroBanner = () => {
  return (
    <Swiper
      grabCursor
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      breakpoints={{
        0: {
          pagination: false,
        },
        1340: {
          pagination: { clickable: true },
        },
      }}
      spaceBetween={0}
      pagination={{ clickable: true }}
      loop
      modules={[Pagination, Autoplay, Navigation]}
      className='hero-slider'
    >
      <SwiperSlide>
        <Image
          src='/images/hero/hero_mens.webp'
          alt='Mens hero'
          width='1920'
          height='800'
          className=' min-h-[550px] bg-no-repeat object-cover object-center'
          priority
        />
        <div className=' absolute bottom-[210px] left-[133px] z-[1] flex flex-col max-lg:bottom-[125px] max-lg:left-[35px] max-md:bottom-[65px] max-sm:left-[10px]'>
          <h1 className=' mb-8 max-w-[650px] animate-heroText text-start font-gugi text-3xl text-white-dis max-md:text-2xl'>
            Нова чоловіча колекція вже в магазині
          </h1>
          <Link
            href='/mens'
            className='w-[300px] rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
          >
            Чоловіча колекція
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/hero/hero_mens.webp'
          alt='Mens hero'
          width='1920'
          height='800'
          className=' min-h-[550px] bg-no-repeat object-cover object-center'
          priority
        />
        <div className=' absolute bottom-[210px] left-[133px] z-[1] flex flex-col max-lg:bottom-[125px] max-lg:left-[35px] max-md:bottom-[65px] max-sm:left-[10px]'>
          <h1 className=' mb-8 max-w-[650px] animate-heroText text-start font-gugi text-3xl text-white-dis max-md:text-2xl'>
            Нова жіноча колекція вже в магазині
          </h1>
          <Link
            href='/women'
            className='w-[300px] rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
          >
            Жіноча колекція
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/hero/hero_mens.webp'
          alt='Mens hero'
          width='1920'
          height='800'
          className=' min-h-[550px] bg-no-repeat object-cover object-center'
          priority
        />
        <div className=' absolute bottom-[210px] left-[133px] z-[1] flex flex-col max-lg:bottom-[125px] max-lg:left-[35px] max-md:bottom-[65px] max-sm:left-[10px]'>
          <h1 className=' mb-8 max-w-[650px] animate-heroText text-start font-gugi text-3xl text-white-dis max-md:text-2xl'>
            Нова дитяча колекція вже в магазині
          </h1>
          <Link
            href='/kids'
            className='w-[300px] rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
          >
            Дитяча колекція
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroBanner
