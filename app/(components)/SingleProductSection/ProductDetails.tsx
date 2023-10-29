import RenderMarkdown from '../RenderMarkdown'
import type { ProductItemProps } from './GeneralInfo'
import ProductCard from './ProductCard'

const ProductDetails: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className='mt-12 flex justify-between gap-8'>
      <div className='flex w-full flex-col gap-6'>
        <RenderMarkdown markdown={productItem.attributes.description} />
      </div>
      <ProductCard productItem={productItem} />
    </div>
  )
}

export default ProductDetails
