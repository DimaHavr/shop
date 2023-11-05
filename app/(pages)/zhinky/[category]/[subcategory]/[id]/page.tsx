import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import type { ProductItem } from '@/app/(components)/ProductsSection/ProductsList'
import SingleProductSection from '@/app/(components)/SingleProductSection/SingleProductSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'
import fetchData from '@/app/(server)/api/service/strapi/fetchData'

export interface ProductsSectionProps {
  productsData: ProductItem
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
