'use client'

import { selectTotalPrice } from '@/app/(redux)/cart/selectors'
import { useAppSelector } from '@/app/(redux)/hooks'

export interface OrderTotalsProps {
  paymentMethod: string
}
const OrderTotals: React.FC<OrderTotalsProps> = ({ paymentMethod }) => {
  const totalPrice = useAppSelector(selectTotalPrice)
  const freeDelivery = totalPrice > 3000

  return (
    <div className='sticky left-0 top-0 flex flex-col gap-8 pt-[74px]'>
      <div className='flex w-[390px] flex-col gap-3 bg-light-grey py-4 shadow-xl'>
        <h3 className=' px-4 font-exo_2 text-xl font-bold'>
          Підсумки замовлення
        </h3>
        <div className='border-b-1 border-white-dis/80 px-0 ' />
        <p className='flex justify-between px-4 font-exo_2 text-md font-semibold'>
          Сума покупок: <span>{totalPrice} UAH</span>
        </p>
        <p className='flex justify-between px-4 font-exo_2 text-md'>
          Вартість доставки: <span>{freeDelivery ? 'Безкоштовно' : '-'}</span>
        </p>
        <p className='flex justify-between px-4 font-exo_2 text-md'>
          Знижка покупця: <span>-</span>
        </p>
        <div className='border-b-1 border-white-dis/80 px-0 ' />
        <p className='flex items-baseline justify-between px-4 font-exo_2 text-md font-bold'>
          До оплати: <span className='text-xl'>{totalPrice}UAH</span>
        </p>
      </div>
      <button
        type='button'
        className='relative w-full  bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300 hover:scale-[1.03]  hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-md:w-full'
      >
        {paymentMethod === 'online' ? 'Замовити і оплатити' : 'Замовити'}
      </button>
    </div>
  )
}

export default OrderTotals
