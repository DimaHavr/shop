'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

const CategoriesLayout = () => {
  const items = [
    {
      key: 'new',
      label: 'New file',
    },
    {
      key: 'copy',
      label: 'Copy link',
    },
    {
      key: 'edit',
      label: 'Edit file',
    },
    {
      key: 'delete',
      label: 'Delete file',
    },
  ]
  const pathname: string = 'clothes'
  return (
    <div className="after:content-[' '] container relative mt-4 flex w-full gap-3 pb-3 after:absolute after:top-[60px] after:w-full after:border-b-1 after:border-[#E5E8ED] max-lg:justify-center max-md:items-center max-md:gap-1 ">
      <div
        className={`${
          pathname === 'ф' &&
          'rounded border-[1px]  border-b-primary-green text-lg font-bold text-primary-green shadow-box max-md:text-sm'
        }  flex items-center justify-center gap-4 px-[20px] py-[5px] text-center font-exo_2 text-md font-semibold text-primary-green transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03] max-md:gap-2 max-md:px-[10px]  max-md:py-0 max-md:text-sm max-sm:gap-1 max-sm:px-0`}
      >
        <Link href='/women/clothes'>Одяг</Link>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className=' bg-white-dis'>
              <IoIosArrowDown size={25} className=' text-primary-green' />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Dynamic Actions' items={items}>
            {items.map(item => (
              <DropdownItem key={item.key} className='transition'>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div
        className={`${
          pathname === 'ф' &&
          'rounded border-[1px]  border-b-primary-green text-lg font-bold text-primary-green shadow-box max-md:text-sm'
        }  flex items-center justify-center gap-4 px-[20px] py-[5px] text-center font-exo_2 text-md font-semibold text-primary-green transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03] max-md:gap-2 max-md:px-[10px]  max-md:py-0 max-md:text-sm max-sm:gap-1 max-sm:px-0`}
      >
        <Link href='/women/shoes'>Взуття</Link>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className=' bg-white-dis'>
              <IoIosArrowDown size={25} className=' text-primary-green' />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Dynamic Actions'>
            {items.map(item => (
              <DropdownItem key={item.key} className='transition'>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div
        className={`${
          pathname === 'ф' &&
          'rounded border-[1px]  border-b-primary-green text-lg font-bold text-primary-green shadow-box max-md:text-sm'
        }  flex items-center justify-center gap-4 px-[20px] py-[5px] text-center font-exo_2 text-md font-semibold text-primary-green transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03] max-md:gap-2 max-md:px-[10px]  max-md:py-0 max-md:text-sm max-sm:gap-1 max-sm:px-0`}
      >
        <Link href='/women/akses'>Аксесуари</Link>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className=' bg-white-dis'>
              <IoIosArrowDown size={25} className=' text-primary-green' />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Dynamic Actions' items={items}>
            {items.map(item => (
              <DropdownItem key={item.key} className='transition'>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export default CategoriesLayout
