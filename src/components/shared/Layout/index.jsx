import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Galery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// import { useConfig } from '@/hooks/useConfig'

export function Layout() {
  // const { isCollapsed } = useConfig()

  return (
    <div className='min-h-screen bg-light'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
