import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}