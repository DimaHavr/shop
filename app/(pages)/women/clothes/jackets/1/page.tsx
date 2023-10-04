import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import SingleProductSection from '@/app/(components)/SingleProductSection/SingleProductSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'

export interface IProduct {
  id: string
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
const womenData: IProduct = {
  id: '1',
  name: "Men's Hooded Sweatshirt",
  brand: 'XYZ Apparel',
  page: 'women',
  category: 'clothes',
  subcategory: 'jackets',
  price: 29.99,
  color: 'Black',
  size: 'Large',
  material: 'Cotton',
  description:
    'A comfortable and stylish hooded sweatshirt for men, made from high-quality cotton. It features a classic black color and is available in various sizes.',
  stock_quantity: 100,
  ratings: {
    average_rating: 4.5,
    num_ratings: 250,
  },
  discount: 30,
  images: [
    '/images/category/women.webp',
    '/images/category/kids.webp',
    '/images/category/mens.webp',
  ],
  features: [
    'Hooded design',
    'Front kangaroo pocket',
    'Ribbed cuffs and hem',
    'Machine washable',
  ],
}
export default async function IndexPage() {
  return (
    <main className='mt-[89px] flex-auto'>
      <Breadcrumb />
      <SingleProductSection productData={womenData} />
      <SubscribeSection />
    </main>
  )
}
