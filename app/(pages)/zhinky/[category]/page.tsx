import CategoriesLayout from '@/app/(components)/CategoriesLayout'
import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import ProductsSection from '@/app/(components)/ProductsSection/ProductsSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'
import fetchData from '@/app/(server)/api/service/strapi/fetchData'

interface IndexPageProps {
  params: {
    category: string
  }
}

export default async function IndexPage({ params }: IndexPageProps) {
  const womenPageProductsUrl = `/products?populate=*&[filters][category][slug][$eq]=${params.category}&pagination[pageSize]=12`
  const currentCategoryUrl = `/categories?populate=*&[filters][slug][$eq]=${params.category}`
  const womenPageCategoriesUrl = `/categories?populate=*&[filters][page][slug][$eq]=zhinky`
  const womenPageCategoriesData = await fetchData(womenPageCategoriesUrl)
  const currentCategoryData = await fetchData(currentCategoryUrl)
  const womenPageProductsData = await fetchData(womenPageProductsUrl)
  const attributesData = currentCategoryData.data[0].attributes

  const breadCrumbArr = [
    {
      slug: `/${attributesData.page.data.attributes.slug}`,
      title: attributesData.page.data.attributes.name,
    },
    {
      slug: `/${attributesData.page.data.attributes.slug}/${attributesData.slug}`,
      title: attributesData.title,
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
