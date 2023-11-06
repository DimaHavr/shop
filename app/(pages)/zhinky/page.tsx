import CategoriesLayout from '@/app/(components)/CategoriesLayout'
import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import ProductsSection from '@/app/(components)/ProductsSection/ProductsSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'
import fetchData from '@/app/(server)/api/service/strapi/fetchData'

export default async function IndexPage() {
  const womenPageProductsUrl = `/products?populate=*&[filters][page][slug][$eq]=zhinky&pagination[pageSize]=12`
  const womenPageCategoriesUrl = `/categories?populate=*&[filters][page][slug][$eq]=zhinky`
  const womenPageCategoriesData = await fetchData(womenPageCategoriesUrl)
  const womenPageProductsData = await fetchData(womenPageProductsUrl)
  const attributesData = womenPageCategoriesData.data[0].attributes
  const breadCrumbArr = [
    {
      slug: `/${attributesData.page.data.attributes.slug}`,
      title: attributesData.page.data.attributes.name,
    },
  ]
  return (
    <main className='mt-[89px] flex-auto'>
      <Breadcrumb breadCrumbArr={breadCrumbArr} />
      <CategoriesLayout categoriesData={womenPageCategoriesData} />
      <ProductsSection
        productsData={womenPageProductsData}
        productsUrl={womenPageProductsUrl}
      />
      <SubscribeSection />
    </main>
  )
}
