import BlogSection from './(layouts)/BlogSection'
import CategoriesSection from './(layouts)/CategoriesSection'
import HeroBanner from './(layouts)/HeroSection'
import NewArrivalsSection from './(layouts)/NewArrivalsSection'
import PopularCategories from './(layouts)/PopularCategories'
import ServicesSection from './(layouts)/ServicesSection'
import SubscribeSection from './(layouts)/SubscribeSection'

export default async function Home() {
  return (
    <main className='mt-[74px] flex-auto'>
      <HeroBanner />
      <CategoriesSection />
      <NewArrivalsSection />
      <PopularCategories />
      <ServicesSection />
      <BlogSection />
      <SubscribeSection />
    </main>
  )
}
