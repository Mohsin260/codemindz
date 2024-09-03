import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="text-center relative">
        <video autoPlay loop muted width={1400} height={500} preload="none" className="object-cover">
          <source src="/videos/coding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Welcome to Codemindz</h1>
          <p className="text-xl mb-8 animate-fade-in-delay">Your partner in web and mobile development</p>
          <Button className="animate-pulse">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero