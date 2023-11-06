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
      <ProductsList productsData={productsData} productsUrl={productsUrl} />
    </section>
  )
}

export default ProductsSection
