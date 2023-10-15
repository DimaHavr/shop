'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'

import useCustomScrollbarLock from '@/app/(hooks)/useCustomScrollbarLock'

import { setShowCart } from '../(redux)/cart/cartSlice'
import { useAppDispatch } from '../(redux)/hooks'

const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const CartRef = useRef<HTMLDivElement>(null)
  const onBackdropCloseCart = useCallback(
    (event: { target: any; currentTarget: any }) => {
      if (event.target === event.currentTarget) {
        dispatch(setShowCart(false))
      }
    },
    [dispatch],
  )

  const handleEscKeyPressContent = useCallback(
    (event: { code: string }) => {
      if (event.code === 'Escape') {
        dispatch(setShowCart(false))
      }
    },
    [dispatch],
  )

  useCustomScrollbarLock({ handleEscKeyPressContent })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ transition: { duration: 0.1 } }}
      ref={CartRef}
      onClick={onBackdropCloseCart}
      className='absolute left-0 top-0 z-10 h-[100vh] w-full overflow-y-auto overflow-x-hidden bg-modal-overlay'
    >
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0, transition: { duration: 0.3 } }}
        exit={{ x: 500, transition: { duration: 0.3 } }}
        className='fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between  bg-footer-gradient-linear-green px-4 pb-[10px] pt-[30px]  md:max-w-[400px]'
      >
        <div className='flex flex-col overflow-auto'>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className='flex items-center gap-1 transition-opacity hover:opacity-80 focus:opacity-80 max-md:m-0  xl:mr-9'
            >
              <Image
                className='h-auto w-[55px]'
                src='/logoR.svg'
                alt='logo'
                width='0'
                height='0'
                priority
              />
              <Image
                className=' h-auto w-[155px]'
                src='/logoText.svg'
                alt='logo'
                width='0'
                height='0'
                priority
              />
            </Link>
            <button
              type='button'
              className='white-dis-700 text-center'
              onClick={() => dispatch(setShowCart(false))}
            >
              <MdOutlineClose
                className='h-10 w-10 fill-white-dis  transition-opacity hover:opacity-80 focus:opacity-80'
                aria-hidden='true'
              />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Cart
