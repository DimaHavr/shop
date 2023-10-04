'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Rating from '../(components)/Rating'
import type { ProductsSectionProps } from '../page'

const NewArrivalsSection: React.FC<ProductsSectionProps> = ({
  productsData,
}) => {
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
          {productsData.map(item => {
            let discountPercentage: number = NaN
            if (item.discount) {
              discountPercentage = item.discount * 0.01
            }
            const oldPrice = item.price + item.price * discountPercentage
            const slug = `/${item.page}/${item.category}/${item.subcategory}/${item.id}`
            return (
              <SwiperSlide key={item.id}>
                <div className='relative mb-12 mt-4 transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'>
                  <Link
                    className=' flex flex-col items-center justify-center rounded-2xl shadow-box '
                    href={slug}
                  >
                    <Image
                      className='h-auto min-w-[200px] '
                      src={`${item.images[0]}`}
                      width={230}
                      height={340}
                      alt='as'
                    />
                    <div className='flex w-full flex-col justify-start gap-2 rounded-b-2xl bg-white-dis p-2'>
                      <h3 className='w-[280px] overflow-hidden whitespace-nowrap text-left font-exo_2 text-md font-semibold text-black-dis '>
                        {item.name}
                      </h3>
                      <p className='flex items-baseline gap-1 font-exo_2 text-lg uppercase'>
                        {item.discount && (
                          <span className='text-base text-[red] line-through'>
                            {oldPrice.toFixed(2)}
                          </span>
                        )}
                        {item.price} uah
                      </p>
                      <div className='absolute right-2 top-2'>
                        <Rating
                          className='flex'
                          size={20}
                          count={5}
                          value={5}
                        />
                      </div>

                      {item.discount && (
                        <span className=' absolute left-[-12px] top-0 z-[1] flex h-[35px] items-center justify-center rounded-[16px] bg-[#c82128] px-[15px] font-exo_2 text-md text-white-dis shadow-button'>
                          {`-${item.discount}%`}
                        </span>
                      )}
                      {item.is_new && (
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
