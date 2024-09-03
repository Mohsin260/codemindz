import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  { title: 'E-commerce Platform', stack: 'WordPress', image: '/images/WordPress-Ecommerce-Website-OG.jpg' },
  { title: 'Social Media Dashboard', stack: 'React.js', image: '/images/social-media-dashboard.jpg' },
  { title: 'Task Management App', stack: 'Next.js', image: '/images/Task_Management_App.jpg' },
  { title: 'Restaurant Booking System', stack: 'MERN Stack', image: '/images/Restaurant_booking_app.jpg' },
  { title: 'Inventory Management', stack: 'Laravel', image: '/images/Inventory_Management-laravel-.jpeg' },
  { title: 'Fitness Tracking App', stack: 'React Native', image: '/images/public/images/fitness-tracking-app.png'},
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="text-white bg-gray-800 hover:bg-gray-700 transition-colors">
              <CardHeader>
                <Image src={project.image} alt={project.title} width={400} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.stack}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects