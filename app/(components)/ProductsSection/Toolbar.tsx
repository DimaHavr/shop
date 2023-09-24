'use client'

import type { Selection } from '@nextui-org/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Pagination, Select, SelectItem } from '@nextui-org/react'
import React from 'react'
import { ImEqualizer } from 'react-icons/im'

interface IAnimal {
  label: string
  value: string
}
export const sortValues: IAnimal[] = [
  {
    label: 'За замовчуванням',
    value: 'default',
  },
  {
    label: 'Найновіше',
    value: 'latest',
  },
  {
    label: 'Найвища ціна',
    value: 'highest_price',
  },
  {
    label: 'Найнижча ціна',
    value: 'lowest_price',
  },
]

const Toolbar = () => {
  const [value, setValue] = React.useState<Selection>(new Set([]))
  return (
    <div className='container flex flex-wrap items-center justify-center  gap-6 py-7 lg:justify-between'>
      <button
        type='button'
        className='flex w-[300px] items-center justify-center  rounded-2xl bg-primary-green px-10 py-3 text-center font-exo_2 text-xl font-bold text-white-dis shadow-button transition-all duration-300  hover:scale-[1.03] hover:opacity-80 focus:scale-[1.03] focus:opacity-80 max-sm:w-[250px] max-sm:text-md'
      >
        <ImEqualizer size={30} />
        <span className='ml-3'> Фільтер</span>
      </button>
      <div className='flex w-[200px] flex-col gap-2'>
        <Select
          defaultSelectedKeys={['default']}
          label='Сортувати:'
          variant='bordered'
          selectedKeys={value}
          classNames={{
            mainWrapper: 'h-[60px] py-0',
            label: 'text-md font-exo_2 text-primary-green font-semibold',
          }}
          className='max-w-xs  text-primary-green'
          onSelectionChange={setValue}
        >
          {sortValues.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Pagination
        showShadow
        classNames={{
          wrapper: 'gap-2',
        }}
        total={10}
        initialPage={1}
      />
    </div>
  )
}

export default Toolbar
