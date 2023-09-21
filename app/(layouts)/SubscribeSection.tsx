'use client'

import { useState } from 'react'
import { GiCheckMark } from 'react-icons/gi'

interface CheckboxProps {
  label: string
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Checkbox: React.FC<CheckboxProps> = ({ value, checked, onChange }) => {
  return (
    <div
      className={`${
        checked ? ' bg-primary-green' : ' bg-none'
      } cursor-pointer rounded-[4px] border-[1px] px-[16px] py-[6px] text-mid-grey`}
    >
      <input
        className={`${checked && ' bg-primary-green'} hidden `}
        type='checkbox'
        name='category'
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        className={`${
          checked ? 'text-white-dis' : 'text-black-dis'
        } cursor-pointer `}
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  )
}

const ConfirmCheckbox: React.FC<CheckboxProps> = ({
  value,
  checked,
  onChange,
}) => (
  <div className='flex items-center gap-2'>
    <input
      className={`${checked && ' bg-primary-green'} hidden `}
      type='checkbox'
      name='confirm'
      required
      value={value}
      id={value}
      checked={checked}
      onChange={onChange}
    />
    <label
      className=' h-7 w-7 cursor-pointer rounded-[4px] border-[1px] text-mid-grey  max-sm:w-10'
      htmlFor={value}
    >
      {checked && <GiCheckMark size={25} color='#17696A' />}
    </label>
    <span className='text-sm font-medium'>
      Я погоджуюсь отримувати повідомлення від Createx Store.
    </span>
  </div>
)

const SubscribeSection: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value))
    } else {
      setSelectedItems([...selectedItems, value])
    }
  }

  const handleCheckboxChangeConfirm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value))
    } else {
      setSelectedItems([...selectedItems, value])
    }
  }

  return (
    <section className='bg-light-grey py-14'>
      <div className='container flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <p className='font-exo_2 text-md'>Підпишіться на оновлення</p>
            <p className=' max-w-[650px] font-exo_2 text-2xl font-semibold'>
              Підпишіться на ексклюзивний доступ до раннього розпродажу та нових
              надходжень.
            </p>
          </div>
          <form className='flex flex-col gap-4'>
            <div className='flex gap-3'>
              <Checkbox
                label='Чоловіки'
                value='Чоловіки'
                checked={selectedItems.includes('Чоловіки')}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label='Жінки'
                value='Жінки'
                checked={selectedItems.includes('Жінки')}
                onChange={handleCheckboxChange}
              />

              <Checkbox
                label='Діти'
                value='Діти'
                checked={selectedItems.includes('Діти')}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className='flex flex-col gap-4'>
              <ConfirmCheckbox
                label='Підтверджую'
                value='confirm'
                checked={selectedItems.includes('confirm')}
                onChange={handleCheckboxChangeConfirm}
              />
              <div className='max-md:flex max-md:flex-col max-md:gap-4 '>
                <input
                  type='email'
                  required
                  placeholder='Електронна пошта'
                  className='h-[50px] w-[350px] rounded-l-[4px] border-[1px] border-r-0 indent-3 text-black-dis max-md:w-full max-md:rounded-[4px] max-md:border-[1px]'
                />

                <button
                  type='button'
                  className='border-l-none h-[50px] rounded-r-[4px] border-[1px] bg-primary-green px-6 text-primary-green transition-opacity hover:opacity-80 focus:opacity-80 max-md:w-full  max-md:rounded-[4px]'
                >
                  <span className='text-md font-semibold text-white-dis'>
                    Підписатися
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <Img src='../../images/subscribeBox/image1.png' /> */}
      </div>
    </section>
  )
}

export default SubscribeSection
