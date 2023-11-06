import type { ProductItem } from './ProductsList'
import ProductsList from './ProductsList'

interface ProductsSectionProps {
  productsUrl: string
  productsData: {
    meta: {
      pagination: {
        total: number
      }
    }
    data: ProductItem[]
  }
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  productsData,
  productsUrl,
}) => {
  return (
    <section className='pb-14'>
      <div className='mt-8'>
        <ProductsList productsData={productsData} productsUrl={productsUrl} />
      </div>
    </section>
  )
}

export default ProductsSection
