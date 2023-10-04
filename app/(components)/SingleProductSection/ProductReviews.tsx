import type { ProductItemProps } from './GeneralInfo'
import ProductCard from './ProductCard'

const ProductReviews: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className='mt-12 flex justify-between gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <p>{productItem.description}</p>
      </div>
      <ProductCard productItem={productItem} />
    </div>
  )
}

export default ProductReviews
