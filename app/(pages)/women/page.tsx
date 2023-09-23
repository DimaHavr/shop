import PopularCategories from '@/app/(layouts)/PopularCategories'
import SubscribeSection from '@/app/(layouts)/SubscribeSection'

export default async function IndexPage() {
  return (
    <main className='mt-[74px] flex-auto'>
      <PopularCategories />
      <SubscribeSection />
    </main>
  )
}
