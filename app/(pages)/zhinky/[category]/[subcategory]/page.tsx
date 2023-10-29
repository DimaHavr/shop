import CategoriesLayout from '@/app/(components)/CategoriesLayout'
import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import ProductsSection from '@/app/(components)/ProductsSection/ProductsSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'
import { fetchData } from '@/app/(server)/api/service/strapi/fetchData'

interface IndexPageProps {
  params: {
    subcategory: string
  }
}

export default async function IndexPage({ params }: IndexPageProps) {
  const womenPageProductsUrl = `/products?populate=*&[filters][subcategory][slug][$eq]=${params.subcategory}&pagination[limit]=8`
  const womenPageCategoriesUrl = `/categories?populate=*&[filters][page][slug][$eq]=zhinky`
  const womenPageCategoriesData = await fetchData(womenPageCategoriesUrl)
  const womenPageProductsData = await fetchData(womenPageProductsUrl)
  return (
    <main className='mt-[89px] flex-auto'>
      <Breadcrumb />
      <CategoriesLayout categoriesData={womenPageCategoriesData} />
      <ProductsSection productsData={womenPageProductsData} />
      <SubscribeSection />
    </main>
  )
}