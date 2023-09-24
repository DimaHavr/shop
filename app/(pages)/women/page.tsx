import Breadcrumb from '@/app/(components)/ProductsSection/Breadcrumb'
import ProductsSection from '@/app/(components)/ProductsSection/ProductsSection'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'

export interface IProduct {
  id: string
  name: string
  brand: string
  page: 'Women' | 'Men' | 'Kids'
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
  discount?: number
  is_new?: boolean
  images: string[]
  features: string[]
}
export interface ProductsSectionProps {
  productsData: IProduct[]
}
const womenData: IProduct[] = [
  {
    id: '1',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Women',
    category: 'Clothes',
    subcategory: 'Jackets',
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
  },
  {
    id: '2',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Men',
    category: 'Clothes',
    subcategory: 'Jackets',
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
  },
  {
    id: '3',
    name: "Men's Hooded Sweatshirt Sweatshirt Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Kids',
    category: 'Clothes',
    subcategory: 'Jackets',
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
    is_new: true,
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
  },
  {
    id: '4',
    name: "Men's Hooded  Hooded HoodedSweatshirt",
    brand: 'XYZ Apparel',
    page: 'Women',
    category: 'Clothes',
    subcategory: 'Jackets',
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
    images: [
      '/images/category/mens.webp',
      '/images/category/women.webp',
      '/images/category/kids.webp',
    ],
    features: [
      'Hooded design',
      'Front kangaroo pocket',
      'Ribbed cuffs and hem',
      'Machine washable',
    ],
  },
  {
    id: '5',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Men',
    category: 'Clothes',
    subcategory: 'Jackets',
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
    discount: 50,
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
  },
  {
    id: '6',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Kids',
    category: 'Clothes',
    subcategory: 'Jackets',
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
  },
  {
    id: '7',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Kids',
    category: 'Clothes',
    subcategory: 'Jackets',
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
  },
  {
    id: '8',
    name: "Men's Hooded Sweatshirt",
    brand: 'XYZ Apparel',
    page: 'Kids',
    category: 'Clothes',
    subcategory: 'Jackets',
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
    images: [
      '/images/category/kids.webp',
      '/images/category/women.webp',
      '/images/category/mens.webp',
    ],
    features: [
      'Hooded design',
      'Front kangaroo pocket',
      'Ribbed cuffs and hem',
      'Machine washable',
    ],
  },
]
export default async function IndexPage() {
  return (
    <main className='mt-[89px] flex-auto'>
      <Breadcrumb />
      <ProductsSection productsData={womenData} />
      <SubscribeSection />
    </main>
  )
}
