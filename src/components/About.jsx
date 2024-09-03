import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Our Mission</AccordionTrigger>
            <AccordionContent>
              To deliver innovative and high-quality software solutions that empower businesses and enhance user experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Our Team</AccordionTrigger>
            <AccordionContent>
              We are a diverse group of passionate developers, designers, and problem-solvers dedicated to creating cutting-edge web and mobile applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Our Approach</AccordionTrigger>
            <AccordionContent>
              We combine agile methodologies with the latest technologies to deliver scalable, efficient, and user-friendly solutions tailored to our clients&apos; needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default About