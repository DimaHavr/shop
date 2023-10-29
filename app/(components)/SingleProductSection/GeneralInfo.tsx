/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import 'photoswipe/style.css'

import type { Selection } from '@nextui-org/react'
import { Accordion, AccordionItem, Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image'
import PhotoSwipe from 'photoswipe'
import React, { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

import type { IProduct } from '@/app/(pages)/zhinky/page'

import Rating from '../Rating'

export interface ProductItemProps {
  productItem: IProduct
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare namespace PhotoSwipe {
  interface Options {
    dataSource: Item[]
    showHideAnimationType: 'zoom' | 'none' | 'fade' | undefined
    showAnimationDuration: number
    hideAnimationDuration: number
  }

  interface Item {
    src: string
    width: number
    height: number
    alt?: string
    title?: string
    index?: number
  }
}

export const animals = [
  {
    label: 'Cat',
    value: 'cat',
    description: 'The second most popular pet in the world',
  },
  {
    label: 'Dog',
    value: 'dog',
    description: 'The most popular pet in the world',
  },
  {
    label: 'Elephant',
    value: 'elephant',
    description: 'The largest land animal',
  },
  { label: 'Lion', value: 'lion', description: 'The king of the jungle' },
  { label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
  {
    label: 'Giraffe',
    value: 'giraffe',
    description: 'The tallest land animal',
  },
  {
    label: 'Dolphin',
    value: 'dolphin',
    description: 'A widely distributed and diverse group of aquatic mammals',
  },
  {
    label: 'Penguin',
    value: 'penguin',
    description: 'A group of aquatic flightless birds',
  },
  {
    label: 'Zebra',
    value: 'zebra',
    description: 'A several species of African equids',
  },
  {
    label: 'Shark',
    value: 'shark',
    description:
      'A group of elasmobranch fish characterized by a cartilaginous skeleton',
  },
  {
    label: 'Whale',
    value: 'whale',
    description: 'Diverse group of fully aquatic placental marine mammals',
  },
  {
    label: 'Otter',
    value: 'otter',
    description: 'A carnivorous mammal in the subfamily Lutrinae',
  },
  {
    label: 'Crocodile',
    value: 'crocodile',
    description: 'A large semiaquatic reptile',
  },
]

const GeneralInfo: React.FC<ProductItemProps> = ({ productItem }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    `${productItem.attributes.img.data[0].attributes.url}`,
  )
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
  const [value, setValue] = React.useState<Selection>(new Set([]))
  const [quantity, setQuantity] = useState(1)

  const incQty = () => {
    setQuantity(quantity + 1)
  }

  const decQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const options: Partial<PhotoSwipe.Options> & { index?: number } = {
    dataSource: productItem.attributes.img.data.map(item => ({
      src: item.attributes.url,
      width: item.attributes.width,
      height: item.attributes.height,
      alt: 'photo',
    })),
    showHideAnimationType: 'zoom',
    showAnimationDuration: 500,
    hideAnimationDuration: 500,
  }

  const handleClick = () => {
    options.index = currentSlideIndex
    const pswp = new PhotoSwipe(options)
    pswp.init()
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }
  let discountPercentage: number = NaN
  if (productItem.attributes.discount) {
    discountPercentage = productItem.attributes.discount * 0.01
  }
  const oldPrice =
    productItem.attributes.price +
    productItem.attributes.price * discountPercentage
  return (
    <div className='mt-12 flex justify-between gap-8 max-lg:flex-col max-lg:justify-center'>
      <div className='flex flex-col gap-4'>
        {selectedImage && (
          <Image
            className='h-auto min-w-[600px] cursor-pointer object-contain max-xl:max-w-[450px] max-lg:min-w-full max-lg:max-w-full'
            src={selectedImage}
            width={500}
            height={600}
            alt='selected-image'
            onClick={handleClick}
          />
        )}

        <ul className='flex w-[600px] gap-4 overflow-auto max-xl:max-w-[600px] max-lg:w-full max-lg:max-w-full max-lg:justify-center'>
          {productItem.attributes.img.data.map((item, index) => (
            <li
              key={item.attributes.url}
              onClick={() => {
                handleImageClick(item.attributes.url)
                setCurrentSlideIndex(index)
              }}
            >
              <Image
                className='h-auto min-w-[120px] cursor-pointer'
                src={item.attributes.url}
                width={230}
                height={340}
                alt='thumbnail'
              />
            </li>
          ))}
        </ul>
      </div>
      <div className=' flex w-[600px] flex-col gap-[30px] max-xl:max-w-[380px] max-lg:w-full max-lg:max-w-full max-md:items-center'>
        <h2 className='font-exo_2 text-2xl font-semibold max-md:text-md'>
          {productItem.attributes.title}
        </h2>
        <div className='flex items-start justify-between'>
          <p className='flex items-baseline gap-1 font-exo_2 text-lg uppercase'>
            {productItem.attributes.discount && (
              <span className='text-base text-[red] line-through'>
                {oldPrice.toFixed(2)}
              </span>
            )}
            {productItem.attributes.price} uah
          </p>
          <Rating className='flex' count={5} value={5} />
        </div>
        <div className='flex w-full max-w-xs flex-col gap-2'>
          <Select
            label='Виберіть колір'
            variant='underlined'
            selectedKeys={value}
            className='max-w-xs'
            onSelectionChange={setValue}
          >
            {animals.map(animal => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='flex w-full max-w-xs flex-col gap-2'>
          <Select
            label='Виберіть розмір'
            variant='underlined'
            selectedKeys={value}
            className='max-w-xs'
            onSelectionChange={setValue}
          >
            {animals.map(animal => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='flex w-[130px]  justify-center gap-2 rounded border-[1px] border-b-primary-green py-[10px] text-center text-lg font-bold text-primary-green shadow-box'>
          <button
            className='transition-all duration-150 hover:scale-[1.05] focus:scale-[1.05]'
            type='button'
          >
            <HiMinus size={30} onClick={decQty} />
          </button>
          <span className='w-[30px]'>{quantity}</span>
          <button
            className='transition-all duration-150 hover:scale-[1.05] focus:scale-[1.05]'
            type='button'
          >
            <HiPlus size={30} onClick={incQty} />
          </button>
        </div>
        <div className=' flex justify-between gap-8 max-md:w-full max-md:flex-col'>
          <button
            type='button'
            className='w-[300px] rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300 hover:scale-[1.03]  hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-md:w-full'
          >
            Купити
          </button>
          <button
            type='button'
            className='w-[300px] rounded-2xl bg-primary-green px-10 py-4 text-center font-exo_2 text-lg font-bold text-white-dis shadow-button transition-all duration-300 hover:scale-[1.03]  hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-md:w-full'
          >
            Улюблене
          </button>
        </div>
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: 'auto',
                transition: {
                  height: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: 'ease',
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: 'ease',
                    duration: 0.25,
                  },
                  opacity: {
                    easings: 'ease',
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem
            key='1'
            aria-label='Повернення і обмін'
            title='Повернення і обмін'
            className=' font-exo_2 text-md'
          >
            Протягом 14 днів з моменту покупки ви можете обміняти або повернути
            товар, який не підійшов. Для здійснення процедур обміну та
            повернення товар має бути збережений у вигляді, в якому був
            доставлений отримувачу з наявними бирками та етикетками виробника. У
            разі повернення чи обміну товару витрати за доставку сплачує
            покупець. Якщо клієнт повертає товар через помилку бренду чи брак –
            ми повністю покриваємо витрати за послуги служби доставки. Більш
            детально ознайомитися з умовами можна у розділі «Повернення та
            обмін» Будь ласка, перш ніж повертати товар, зв’яжіться з нами —
            наші менеджери проінформують вас щодо всіх умов щоб заощадити ваш
            час.
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Оплата і доставка'
            title='Оплата і доставка'
            className=' font-exo_2 text-md'
          >
            Ви можете оплатити замовлення одним із доступних способів: сервіс
            миттєвих платежів LiqPay, безготівковий розрахунок за реквізитами
            рахунку для оплати або PayPal, післяплатою при отриманні замовлення
            за передплатою. Ми доставляємо товари по всій Україні за допомогою
            служби «Нова Пошта». Відправка замовлення здійснюється протягом 1-4
            днів, за наявності товару на складі. У разі, якщо товару немає в
            наявності, наш менеджер повідомить вам срок виготовлення виробу та
            доставки. Отримати замовлення ви зможете у найближчих відділеннях та
            поштоматах «Нової Пошти» або скориставшись послугою доставки
            кур’єром за зручною вам адресою. Доставку сплачує замовник згідно з
            тарифами перевізника. Послуга безкоштовної доставки до відділення чи
            поштомату по Україні діє при замовленні від 2500 грн за умови повної
            оплати. Відправка міжнародних замовлень здійснюється за допомогою
            логістичної служби «Укрпошта» за єдиним фіксованим тарифом — 800
            грн. Орієнтовний срок доставки 10-20 днів з моменту відправки
            замовлення. Більш детально ознайомитися з умовами можна у розділі
            «Оплата і доставка»
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default GeneralInfo
