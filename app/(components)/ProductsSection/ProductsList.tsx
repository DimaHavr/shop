import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'

import type { ProductsSectionProps } from '@/app/(pages)/women/page'

const ProductsList: React.FC<ProductsSectionProps> = ({ productsData }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-8'>
      {productsData.map(item => {
        const slug = `/${item.page}/${item.category}/${item.subcategory}/${item.id}`
        return (
          <li
            className='relative transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
            key={item.id}
          >
            <Link
              className=' flex flex-col items-center justify-center rounded-2xl shadow-box '
              href={slug}
            >
              <Image
                className='h-auto min-w-[300px] '
                src={`${item.images[0]}`}
                width={230}
                height={340}
                alt='as'
              />
              <div className='flex w-full flex-col justify-start gap-2 rounded-b-2xl bg-white-dis p-2'>
                <h3 className='w-[280px] overflow-hidden whitespace-nowrap text-left font-exo_2 text-md font-semibold text-black-dis '>
                  {item.name}
                </h3>
                <p className=' text-left font-exo_2 text-md font-semibold text-black-dis '>
                  {item.price}
                </p>
                <div className='absolute right-2 top-2'>rating</div>

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
          </li>
        )
      })}
    </ul>
  )
}

export default ProductsList
