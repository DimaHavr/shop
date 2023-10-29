import type { ProductItem } from './ProductsList'
import ProductsList from './ProductsList'
import Toolbar from './Toolbar'

interface ProductsSectionProps {
  productsData: {
    meta: {
      pagination: {
        total: number
      }
    }
    data: ProductItem[]
  }
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ productsData }) => {
  return (
    <section className='pb-14'>
      {productsData.meta.pagination.total > 8 ? (
        <>
          <Toolbar />
          <ProductsList productsData={productsData} />
          <Toolbar />
        </>
      ) : (
        <div className='mt-8'>
          <ProductsList productsData={productsData} />
        </div>
      )}
    </section>
  )
}

export default ProductsSection
