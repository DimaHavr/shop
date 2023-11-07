'use client'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Pagination, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { ImEqualizer } from 'react-icons/im'

import type { ProductItem } from './ProductsList'

interface ISortValue {
  label: string
  value: string
}
export const sortValues: ISortValue[] = [
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

interface ToolbarProps {
  productsData: {
    data: ProductItem[]
    meta: {
      pagination: {
        total: number
      }
    }
  }
  currentPage: number
  handlePageChange: (page: number) => void
}

const Toolbar: React.FC<ToolbarProps> = ({
  productsData,
  currentPage,
  handlePageChange,
}) => {
  const [sortValue, setSortValue] = useState<string>('default')

  const handleSelectionChangeSortValue = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortValue(e.target.value)
  }

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
          label='Сортувати'
          variant='bordered'
          className='max-w-xs'
          selectedKeys={[sortValue]}
          onChange={handleSelectionChangeSortValue}
        >
          {sortValues.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Pagination
        showControls
        showShadow
        classNames={{
          wrapper: 'gap-2',
          item: 'w-8 h-8 text-primary-green font-exo_2 text-md font-bold bg-transparent',
          cursor:
            'bg-primary-green shadow-box text-white-dis font-exo_2 text-lg font-bold transition-color',
        }}
        total={Math.ceil(productsData.meta.pagination.total / 8)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Toolbar
