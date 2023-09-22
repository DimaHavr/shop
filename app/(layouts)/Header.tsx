'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { FaBars, FaHeart, FaOpencart, FaSearch } from 'react-icons/fa'

import Cart from '../(components)/Cart'
import SearchBar from '../(components)/SearchBar'
import SearchInput from '../(components)/SearchInput'
import { useWindowSize } from '../(hooks)/useWindowResize'
import { setShowCart } from '../(redux)/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../(redux)/hooks'
import CourierModal from './(components)/CourierModal'
import MobileMenu from './(components)/MobileMenu'
import SuccessSubmitBanner from './(components)/SuccessSubmitBanner'

export const Header: React.FC = () => {
  const showCart = useAppSelector(state => state.cartReducer.showCart)
  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const toggleSuccessSubmitModal = useCallback(() => {
    setSubmitSuccess(prev => !prev)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])
  const toggleCourierModal = useCallback(() => {
    setShowModal(prev => !prev)
  }, [])

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => !prev)
  }, [])

  const handleSearch = (query: string) => {
    // Handle the search query (e.g., make an API request)
    // eslint-disable-next-line no-console
    console.log('Search query:', query)
  }
  const screenSize = useWindowSize()
  return (
    <header className='padding-lock max-md fixed left-0 top-0 z-50 flex w-full items-center border-b-[1px] bg-footer-gradient-linear-green '>
      <nav
        className='container mx-auto flex w-full items-center  justify-between py-4 max-md:justify-between lg:px-0'
        aria-label='Global'
      >
        <Link
          href='/'
          className='flex gap-1 transition-opacity hover:opacity-80 focus:opacity-80 max-md:m-0  xl:mr-9'
        >
          <Image
            className='h-auto w-[85px]'
            src='/vercel.svg'
            alt='logo'
            width='0'
            height='0'
            priority
          />
        </Link>

        <ul className=' hidden gap-12  lg:flex'>
          <li>
            <Link
              href='/mens'
              className='font-exo_2 text-base font-semibold text-white-dis transition-opacity hover:opacity-80  focus:opacity-80'
            >
              Чоловіки
            </Link>
          </li>
          <li>
            <Link
              href='/women'
              className='font-exo_2 text-base font-semibold  text-white-dis transition-opacity hover:opacity-80  focus:opacity-80'
            >
              Жінки
            </Link>
          </li>
          <li>
            <Link
              href='/kids'
              className='font-exo_2 text-base font-semibold text-white-dis transition-opacity hover:opacity-80  focus:opacity-80'
            >
              Діти
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className='font-exo_2 text-base font-semibold text-white-dis transition-opacity hover:opacity-80  focus:opacity-80'
            >
              Блог
            </Link>
          </li>
        </ul>
        <div className='flex gap-8 max-md:gap-6 max-sm:gap-3'>
          {screenSize.width > 767 ? (
            <SearchInput onSearch={handleSearch} />
          ) : (
            <button aria-label='Пошук' type='button' onClick={toggleSearchBar}>
              <FaSearch
                color='#fff'
                className=' transition-opacity   hover:opacity-80 focus:opacity-80'
                size={25}
              />
            </button>
          )}
          <button
            aria-label='Улюблені'
            type='button'
            onClick={() => dispatch(setShowCart(true))}
          >
            <FaHeart
              color='#fff'
              className='transition-opacity hover:opacity-80  focus:opacity-80'
              size={30}
            />
          </button>
          <button
            aria-label='Кошик'
            type='button'
            onClick={() => dispatch(setShowCart(true))}
          >
            <FaOpencart
              color='#fff'
              className='transition-opacity hover:opacity-80  focus:opacity-80'
              size={40}
            />
          </button>
          <button
            aria-label='Меню'
            type='button'
            className='text-gray-700 -m-2.5 hidden cursor-pointer items-center justify-center rounded-md p-2.5 transition-opacity hover:opacity-80 focus:opacity-80  max-lg:block md:pl-8'
            onClick={toggleMobileMenu}
          >
            <FaBars className='h-8 w-8' aria-hidden='true' color='#fff' />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {showModal && (
          <CourierModal
            toggleCourierModal={toggleCourierModal}
            setSubmitSuccess={setSubmitSuccess}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
      </AnimatePresence>
      <AnimatePresence>
        {submitSuccess && (
          <SuccessSubmitBanner
            toggleSuccessSubmitModal={toggleSuccessSubmitModal}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      <AnimatePresence>
        {showSearchBar && (
          <SearchBar
            onSearch={handleSearch}
            toggleSearchBar={toggleSearchBar}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
