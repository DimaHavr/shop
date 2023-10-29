import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import SingleProductSection from '@/app/(components)/SingleProductSection/SingleProductSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'
import { fetchData } from '@/app/(server)/api/service/strapi/fetchData'

export interface IProduct {
  id: number
  name: string
  brand: string
  page: 'women' | 'Men' | 'Kids'
  category: string
  subcategory: string
  price: number
  color: string
  size: string
  material: string
  description: string
  stock_quantity: number
  ratings: {
    average_rating: number
    num_ratings: number
  }
  discount?: number | undefined
  is_new?: boolean
  images: string[]
  features: string[]
}
export interface ProductsSectionProps {
  productsData: IProduct
}
interface IndexPageProps {
  params: {
    id: number
  }
}

export default async function IndexPage({ params }: IndexPageProps) {
  const productUrl = `/products/${params.id}?populate=*`
  const productData = await fetchData(productUrl)
  return (
    <main className='mt-[89px] flex-auto'>
      <Breadcrumb />
      <SingleProductSection productData={productData.data} />
      <SubscribeSection />
    </main>
  )
}
