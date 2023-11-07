'use client'

import { Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'

interface FormValues {
  [key: string]: string
}
const PersonalData = () => {
  const [formValue, setFormValue] = useState<FormValues>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValue(prevFormValue => ({
      ...prevFormValue,
      [name]: value,
    }))
  }
  return (
    <div className='flex flex-col justify-start gap-4'>
      <h3 className=' font-exo_2 text-xl font-bold'>2. Персональні дані</h3>
      <div className='flex flex-col'>
        <form className='flex w-full flex-wrap gap-3'>
          <Input
            isRequired
            label="Ім'я"
            variant='underlined'
            name='firstName'
            value={formValue.firstName || ''}
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-[228px]',
            }}
          />
          <Input
            isRequired
            variant='underlined'
            label='По батькові'
            name='middleName'
            value={formValue.middleName || ''}
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-[228px]',
            }}
          />
          <Input
            isRequired
            variant='underlined'
            label='Прізвище'
            name='lastName'
            value={formValue.lastName || ''}
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-[228px]',
            }}
          />
          <Input
            isRequired
            variant='underlined'
            label='Телефон'
            name='phone'
            value={formValue.phone || ''}
            defaultValue='+380'
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-[228px]',
            }}
          />
          <Input
            variant='underlined'
            label='Email'
            name='email'
            value={formValue.email || ''}
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-[228px]',
            }}
          />
          <Textarea
            variant='underlined'
            label='Коментар до замовлення'
            name='comment'
            value={formValue.comment || ''}
            onChange={handleInputChange}
            classNames={{
              label: 'font-exo_2 text-lg',
              base: 'w-full',
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default PersonalData
