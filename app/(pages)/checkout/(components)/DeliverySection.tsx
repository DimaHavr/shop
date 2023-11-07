/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import axios from 'axios'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

interface City {
  Ref: string
  Description: string
}

interface Warehouse {
  SiteKey: string
  Description: string
}

const DeliverySection = () => {
  const apiKey = 'c75de6f5d503c098726768ca49c79618'
  const [filterCityValue, setFilterCityValue] = useState('')
  const [filterWarehouseValue, setFilterWarehouseValue] = useState('')
  const [filteredCities, setFilteredCities] = useState<City[]>([])
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedKeyCityRef, setSelectedKeyCityRef] =
    useState<React.Key | null>(null)
  const [selectedKeyWarehouse, setSelectedKeyWarehouse] =
    useState<React.Key | null>(null)
  const [isUserSelecting, setIsUserSelecting] = useState(false)

  // Знаходимо і вибираємо місто(ref)

  const getFilteredCities = async () => {
    setLoading(true)
    const modelName = 'Address'
    const calledMethod = 'getCities'
    const methodProperties = {
      FindByString: filterCityValue,
      Page: '1',
      Limit: '10',
    }
    try {
      if (!filterCityValue) {
        setLoading(false)
        setFilteredCities([])
        return
      }
      const response = await axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          apiKey,
          modelName,
          calledMethod,
          methodProperties,
        },
      )
      const cities: City[] = response.data.data
      setFilteredCities(cities)
      setWarehouses([])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw new Error('Error')
    }
  }

  const getFilteredWarehouses = async () => {
    const modelName = 'Address'
    const calledMethod = 'getWarehouses'
    const methodProperties = {
      CityRef: selectedKeyCityRef,
      FindByString: filterWarehouseValue,
      Page: '1',
      Limit: '10',
    }
    try {
      const response = await axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          apiKey,
          modelName,
          calledMethod,
          methodProperties,
        },
      )
      const res: Warehouse[] = response.data.data
      setWarehouses(res)
    } catch (error) {
      throw new Error('Error')
    }
  }

  const handleFilterCityDebounced = debounce(getFilteredCities, 300)
  const handleFilterWarehouseDebounced = debounce(getFilteredWarehouses, 300)

  const handleFilterCityInputChange = (value: string) => {
    setFilterCityValue(value)
    if (!isUserSelecting) {
      handleFilterCityDebounced()
    }
  }
  const handleFilterWarehouseInputChange = (value: string) => {
    setFilterWarehouseValue(value)
  }
  const onSelectionChangeCityRef = (key: React.Key) => {
    setIsUserSelecting(true)
    setSelectedKeyCityRef(key)
  }
  const onSelectionChangeWarehouse = (key: React.Key) => {
    setIsUserSelecting(true)
    setSelectedKeyWarehouse(key)
  }

  useEffect(() => {
    if (!selectedKeyCityRef) {
      setIsUserSelecting(false)

      return
    }
    handleFilterWarehouseDebounced()
    setIsUserSelecting(false)
  }, [selectedKeyCityRef])

  const warehouseData = warehouses.find(
    item => item.SiteKey === selectedKeyWarehouse,
  )
  return (
    <div className='flex flex-col justify-start gap-4'>
      <h3 className='font-exo_2 text-xl font-bold'>3. Дані доставки</h3>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-4'>
          <p className='font-exo_2 text-xl font-semibold'>Нова Пошта</p>
          <Autocomplete
            defaultItems={filteredCities}
            variant='underlined'
            label='Виберіть населений пункт'
            classNames={{
              base: 'w-full font-exo_2 text-lg',
            }}
            onInputChange={handleFilterCityInputChange}
            onSelectionChange={onSelectionChangeCityRef}
          >
            {city => (
              <AutocompleteItem key={city.Ref} value={[filterCityValue]}>
                {loading ? <p>Пошук...</p> : city.Description}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            defaultItems={warehouses}
            variant='underlined'
            label='Виберіть пункт видачі'
            classNames={{
              base: 'w-full font-exo_2 text-lg',
            }}
            onInputChange={handleFilterWarehouseInputChange}
            onSelectionChange={onSelectionChangeWarehouse}
          >
            {warehouse => (
              <AutocompleteItem
                key={warehouse.SiteKey}
                value={[filterWarehouseValue]}
              >
                {warehouse.Description}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <p className='font-exo_2 text-lg font-bold'>
            {warehouseData?.Description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DeliverySection
