import type { ProductsSectionProps } from '@/app/(pages)/women/page'

import ProductsList from './ProductsList'
import Toolbar from './Toolbar'

const ProductsSection: React.FC<ProductsSectionProps> = ({ productsData }) => {
  return (
    <section className='pb-14'>
      <Toolbar />
      <ProductsList productsData={productsData} />
      <Toolbar />
    </section>
  )
}

export default ProductsSection
