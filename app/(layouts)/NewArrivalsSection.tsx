'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Rating } from '@smastrom/react-rating'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { ProductItem } from '../(components)/ProductsSection/ProductsList'

interface NewArrivalsSectionProps {
  newProductsData: {
    data: ProductItem[]
  }
}
const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  newProductsData,
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
          {newProductsData.data.map(item => {
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
              <SwiperSlide key={item.id}>
                <div className='relative mb-12 mt-4 transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'>
                  <Link
                    className='flex w-[300px] flex-col items-center justify-center rounded-2xl shadow-box '
                    href={slug}
                  >
                    <Image
                      className='h-[300px] min-w-[200px] object-cover'
                      src={imageUrl}
                      width={item.attributes.img.data[0]?.attributes.width}
                      height={item.attributes.img.data[0]?.attributes.height}
                      alt='as'
                    />
                    <div className='flex w-full flex-col justify-start gap-1 rounded-b-2xl bg-white-dis p-3'>
                      <p className='flex items-baseline gap-1 text-center font-exo_2 text-lg uppercase '>
                        {item.attributes.discount && (
                          <span className='text-base text-[red] line-through'>
                            {oldPrice.toFixed(2)}
                          </span>
                        )}
                        {item.attributes.price} uah
                      </p>
                      <h3 className='line-clamp-2 text-left font-exo_2 text-md font-semibold text-black-dis '>
                        {item.attributes.title}
                      </h3>

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
