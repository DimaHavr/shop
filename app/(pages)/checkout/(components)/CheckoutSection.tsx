'use client'

import Link from 'next/link'
import React from 'react'

import { selectCartItems, selectTotalPrice } from '@/app/(redux)/cart/selectors'
import { useAppSelector } from '@/app/(redux)/hooks'

import CheckoutItemReview from './CheckoutItemReview'
import DeliverySection from './DeliverySection'
import PaymentSection from './PaymentSection'
import PersonalData from './PersonalData'

const CheckoutSection = () => {
  const cartItems = useAppSelector(selectCartItems)
  const totalPrice = useAppSelector(selectTotalPrice)

  return (
    <section className='pb-14 pt-8'>
      <div className='container flex items-center justify-center'>
        <div className='flex w-[720px] flex-col gap-4'>
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
          <CheckoutItemReview cartItems={cartItems} totalPrice={totalPrice} />
          <PersonalData />
          <DeliverySection />
          <PaymentSection />
        </div>
      </div>
    </section>
  )
}

export default CheckoutSection
