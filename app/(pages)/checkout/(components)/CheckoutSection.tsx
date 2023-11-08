'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { selectCartItems, selectTotalPrice } from '@/app/(redux)/cart/selectors'
import { useAppSelector } from '@/app/(redux)/hooks'

import CheckoutItemReview from './CheckoutItemReview'
import DeliverySection from './DeliverySection'
import OrderTotals from './OrderTotals'
import PaymentSection from './PaymentSection'
import PersonalData from './PersonalData'

const CheckoutSection = () => {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState<string>('')
  const cartItems = useAppSelector(selectCartItems)
  const totalPrice = useAppSelector(selectTotalPrice)

  return cartItems.length === 0 ? (
    <>{router.replace('/')}</>
  ) : (
    <section className='pb-14 pt-8'>
      <div className='container relative flex w-full flex-col items-center justify-center gap-6'>
        <div className='flex w-full items-baseline justify-between'>
          <h2 className='font-exo_2 text-2xl font-bold text-black-dis'>
            Оформлення покупок
          </h2>
          <Link
            className='font-exo_2 text-md font-semibold text-primary-green'
            href='/'
          >
            Повернутися в магазин
          </Link>
        </div>
        <div className='  flex w-full items-start justify-between'>
          <div className='flex w-[720px] flex-col gap-6'>
            <CheckoutItemReview cartItems={cartItems} totalPrice={totalPrice} />
            <PersonalData />
            <DeliverySection />
            <PaymentSection
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <OrderTotals paymentMethod={paymentMethod} />
        </div>
      </div>
    </section>
  )
}

export default CheckoutSection
