"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const technologies = [
  { name: "HTML", image: "/images/html.png", style: "text-red-500", alignment: "text-left" },
  { name: "CSS", image: "/images/css.png", style: "text-blue-500", alignment: "text-center" },
  { name: "JavaScript", image: "/images/javascript.png", style: "text-yellow-500", alignment: "text-right" },
  { name: "React", image: "/images/react.png", style: "text-cyan-500", alignment: "text-left m-4" },
  { name: "Next.js", image: "/images/nextjs.png", style: "text-gray-500", alignment: "text-center m-6" },
  { name: "WordPress", image: "/images/wordpress.png", style: "text-blue-300", alignment: "text-right" },
  { name: "Laravel", image: "/images/laravel.png", style: "text-red-600", alignment: "text-left" },
  { name: "Node.js", image: "/images/nodejs.png", style: "text-green-500", alignment: "text-center" },
  { name: "React Native", image: "/images/react-native.png", style: "text-cyan-400", alignment: "text-right" },
  { name: "PHP", image: "/images/php.png", style: "text-indigo-300", alignment: "text-left m-6" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Our Expertise
        </h2>
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]} // 3-second delay between slides
          loop={true} // Enable looping
        >
          <CarouselContent className="flex">
            {technologies.map((tech) => (
              <CarouselItem
                key={tech.name}
                className={`basis-full sm:basis-1/2 md:basis-1/3 px-4 ${tech.alignment}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={120}
                    height={120}
                    className={`mb-4 object-contain ${tech.style}`}
                  />
                  <p className={`text-center text-white ${tech.style}`}>
                    {tech.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Experience;

