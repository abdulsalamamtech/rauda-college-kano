
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Excellence', 'Innovation', 'Care', 'Future'];
  const slides = [
    {
      id: 1,
      // image: 'images/college/muslima-doctor.jpg',
      image: 'rauda-college-frontview.jpeg',
      title: 'Professionals Medical Staff'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
      title: 'Modern Healthcare Education'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      title: 'Expert Medical Training'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              <div className="relative h-screen flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center px-4"
                >
                  <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
                    Shaping Tomorrow's
                    <span className="block text-medical-200 mt-2">
                      Healthcare Leaders
                    </span>
                  </h1>
                  
                  <div className="h-12 mb-8">
                    <motion.p
                      key={currentWord}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-xl md:text-2xl text-white/90"
                    >
                      Committed to {words[currentWord]}
                    </motion.p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Link to="/programs">
                      <Button
                        size="lg"
                        className="bg-medical-600 hover:bg-medical-700 text-white"
                      >
                        Explore Programs
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white bg-white text-medical-800 hover:bg-medical-50"
                    >
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 text-white" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 text-white" />
      </Carousel>
    </section>
  );
};

export default Hero;
